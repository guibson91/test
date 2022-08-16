/**
 * Documentation Updated:
 * 'firebase': 9.1.0
 * 'rxjs': 6.6.0
 *
 * @author Guibson Martins
 * @description Abstract class pra ser herdada em classes que representam collections no Firestore.
 * Utilizada para facilitar interações com o banco de dados (create, read, update, delete)
 * É possível decidir entre leitura de dados realtime (listSync, objectSync) ou
 * leitura de dados sem realtime (list, object)
 * @example Vide models/user.ts
 */

import { initializeApp } from 'firebase/app';
export const firebaseConfig = environment.production
  ? {
      apiKey: 'AIzaSyAso5dAo0Dfo6lR9jtcWCyP_EIZo6E3Cf0',
      authDomain: 'fast-cash-70922.firebaseapp.com',
      projectId: 'fast-cash-70922',
      storageBucket: 'fast-cash-70922.appspot.com',
      messagingSenderId: '760743401932',
      appId: '1:760743401932:web:fe95ea418fa50b65f72569',
    }
  : {
      apiKey: 'AIzaSyAso5dAo0Dfo6lR9jtcWCyP_EIZo6E3Cf0',
      authDomain: 'fast-cash-70922.firebaseapp.com',
      projectId: 'fast-cash-70922',
      storageBucket: 'fast-cash-70922.appspot.com',
      messagingSenderId: '760743401932',
      appId: '1:760743401932:web:fe95ea418fa50b65f72569',
    };
initializeApp(firebaseConfig);

import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  addDoc,
  updateDoc,
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
  DocumentReference,
  DocumentSnapshot,
  query,
  where,
  orderBy,
  onSnapshot,
  QuerySnapshot,
  limit,
  Query,
} from 'firebase/firestore';
import { from, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NanoDate } from './util';

export abstract class NanoCollection {
  static db = getFirestore();
  static path: string;
  id?: string;
  createdAt?: NanoDate;
  updatedAt?: NanoDate;
  selected?: boolean;
  constructor(data) {
    Object.assign(this, data);
  }

  public static list<T>(
    whereQueries: WhereQuery[] = [],
    orderQueries: OrderQuery[] = [],
    limitNumber?: number
  ): Observable<T[]> {
    const q = this.createQuery(
      this.getCollectionRef(),
      whereQueries ? whereQueries : [],
      orderQueries ? orderQueries : [],
      limitNumber
    );
    return this.getQuerySnapshot(q).pipe(
      map((snap) => this.fromQuerySnapshot(snap))
    );
  }

  public static listSync<T>(
    whereQueries: WhereQuery[] = [],
    orderQueries: OrderQuery[] = [],
    limitNumber?: number
  ): Observable<T[]> {
    const q = this.createQuery(
      this.getCollectionRef(),
      whereQueries ? whereQueries : [],
      orderQueries ? orderQueries : [],
      limitNumber
    );
    const obs: Subject<any> = new Subject();
    onSnapshot(q, obs);
    return obs.pipe(map((snap) => this.fromQuerySnapshot(snap)));
  }

  public static object<T>(id: string): Observable<T> {
    if (typeof id !== 'string' || id === '') {
      return of(null);
    }
    return this.getDocumentSnapshot(id).pipe(
      map((docSnap) => {
        if (docSnap.exists()) {
          return this.fromDocumentSnapshot(docSnap);
        } else {
          return null;
        }
      })
    );
  }

  public static objectSync<T>(id: string): Observable<T> {
    if (typeof id !== 'string' || id === '') {
      return of(null);
    }
    const obs: Subject<any> = new Subject();
    onSnapshot(this.getDocRef(id), obs);
    return obs
      .pipe(map(this.fromDocumentSnapshot))
      .pipe(map((item) => new (this as any)(item)));
  }

  public static add<T>(obj: T & { createdAt?: NanoDate }): Observable<string> {
    if (obj === null || obj === undefined) {
      return of(null);
    }
    obj.createdAt = new Date() as NanoDate;
    return from(addDoc(this.getCollectionRef(), this.cleanObject(obj))).pipe(
      map((docRef) => docRef.id)
    );
  }

  public static remove(id): Observable<void> {
    if (typeof id !== 'string' || id === '') {
      return of(null);
    }
    return from(deleteDoc(this.getDocRef(id)));
  }

  public static update<T>(
    id,
    obj: T & { updatedAt?: NanoDate }
  ): Observable<void> {
    if (
      typeof id !== 'string' ||
      id === '' ||
      obj === null ||
      obj === undefined
    ) {
      return of(null);
    }
    obj.updatedAt = new Date() as NanoDate;
    const docRef: DocumentReference<DocumentData> = this.getDocRef(id);
    return from(updateDoc(docRef, this.cleanObject(obj)));
  }

  public static set<T>(id, obj: T): Observable<void> {
    if (
      typeof id !== 'string' ||
      id === '' ||
      obj === null ||
      obj === undefined ||
      obj === {}
    ) {
      return of(null);
    }
    const docRef: DocumentReference<DocumentData> = this.getDocRef(id);
    return from(setDoc(docRef, this.cleanObject(obj)));
  }

  private static cleanObject(obj: any) {
    obj = Object.assign({}, obj);
    Object.keys(obj).forEach(
      (key) =>
        (obj[key] &&
          typeof obj[key] === 'object' &&
          this.cleanObject(obj[key])) ||
        (obj[key] === undefined && delete obj[key])
    );
    return obj;
  }

  private static createQuery(
    _collection: CollectionReference,
    wheres?: WhereQuery[],
    orders?: OrderQuery[],
    limitNumber?: number
  ): Query<DocumentData> {
    return query(
      _collection,
      ...wheres.map((w) => where(w.name, w.operator, w.value)),
      ...orders.map((o) => orderBy(o.name, o.type ? o.type : 'desc')),
      limit(limitNumber)
    );
  }

  private static getDocumentSnapshot(
    id
  ): Observable<DocumentSnapshot<DocumentData>> {
    return from(getDoc(this.getDocRef(id)));
  }

  private static getQuerySnapshot(
    q?: Query<any>
  ): Observable<QuerySnapshot<DocumentData>> {
    if (query) {
      return from(getDocs(q));
    }
    return from(getDocs(this.getCollectionRef()));
  }

  private static getDocRef(id): DocumentReference<DocumentData> {
    return doc(NanoCollection.db, this.path, id);
  }
  private static getCollectionRef(): CollectionReference<DocumentData> {
    return collection(NanoCollection.db, this.path);
  }

  private static fromDocumentSnapshot(
    document: DocumentSnapshot
  ): any & { id: string } {
    if (!document.exists) {
      return null;
    }
    const obj: any = document.data();
    if (!obj) {
      return null;
    }
    obj.id = document.id;
    return obj;
  }

  private static fromQuerySnapshot<T>(localQuery: QuerySnapshot): T[] {
    return localQuery.docs.map((d: DocumentSnapshot) => {
      if (!d.exists) {
        return null;
      }
      const obj: any = d.data();
      obj.id = d.id;
      return obj;
    });
  }
}

export interface WhereQuery {
  name: string;
  operator:
    | '<'
    | '<='
    | '=='
    | '>'
    | '>='
    | '!='
    | 'array-contains'
    | 'array-contains-any'
    | 'in'
    | 'not-in';
  value: any;
}

export interface OrderQuery {
  name: string;
  type?: 'asc' | 'desc';
}
