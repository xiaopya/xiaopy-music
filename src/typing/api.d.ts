import {Effect, Reducer, Subscription} from 'umi';

declare namespace APIModel {
    interface EffectModel {
        [key: string]: Effect;
    }

    interface ReducerModel<T> {
        [key: string]: Reducer<T>;
    }

    interface DvaModel<T> {
        namespace: string;
        state?: T;
        effects?: EffectModel;
        reducers?: ReducerModel<T>;
        subscriptions?: Subscription;
    }
}

declare namespace API {
    interface dispatchType<T> {
        dispatch: (arg0: { type: string; payload: T; }) => void;
    }
}