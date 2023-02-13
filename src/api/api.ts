/** @module Api */

import * as ApiTypes from './api.types';
export * from "./api.types";

/** API サーバのホスト名（とポート番号） */
const API_SERVER = 'http://sazasub.kohga.local';

/**
 * 新しいユーザ識別子を発行する。
 *
 * @return createUser API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function createUser() {
    const API_PATH = '/createUser';
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'GET',
        },
    );
    return await res.json() as ApiTypes.CreateUserResult;
}


/**
 * terminate に渡すパラメータの内容を格納する型
 */
interface TerminateQuery {
    /** ユーザ識別子 */
    userId: ApiTypes.UserId,
};

/**
 * ユーザの手続きを終了する。
 * 
 * @param userId ユーザ識別子
 * @return terminate API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function terminate(userId: ApiTypes.UserId) {
    const API_PATH = '/terminate';
    const query: TerminateQuery = {
        userId,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.TerminateResult;
}

/**
 * endRoute に渡すパラメータの内容を格納する型
 */
interface EndRouteQuery {
    /** ユーザ識別子 */
    userId: ApiTypes.UserId,
};

/**
 * ユーザに紐付けられている経路の実行をキャンセルする。
 * 
 * @param userId ユーザ識別子
 * @return endRoute API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function endRoute(userId: ApiTypes.UserId) {
    const API_PATH = '/endRoute';
    const query: EndRouteQuery = {
        userId,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.EndRouteResult;
}

/**
 * proceedRoute に渡すパラメータの内容を格納する型
 */
interface ProceedRouteQuery {
    /** ユーザ識別子 */
    userId: ApiTypes.UserId,
};

/**
 * 停留所に停まっている車を次の停留所に進ませる。
 * 
 * @param userId ユーザ識別子
 * @return proceedRoute API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function proceedRoute(userId: ApiTypes.UserId) {
    const API_PATH = '/proceedRoute';
    const query: ProceedRouteQuery = {
        userId,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.ProceedRouteResult;
}

/**
 * isAccepted に渡すパラメータの内容を格納する型
 */
interface IsAcceptableQuery {
    /** ユーザ識別子 */
    userId: ApiTypes.UserId,
};

/**
 * 新しい経路を実行可能か調べる。
 * 
 * @param userId ユーザ識別子
 * @return isAcceptable API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function isAcceptable(userId: ApiTypes.UserId) {
    const API_PATH = '/isAcceptable';
    const query: IsAcceptableQuery = {
        userId,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.IsAcceptableResult;
}

/**
 * routeName に渡すパラメータの内容を格納する型
 */
interface RouteNameQuery {
    /** ユーザ識別子 */
    userId: ApiTypes.UserId,
};

/**
 * 全ての保存済み経路名情報を取得する。
 * 
 * @param userId ユーザ識別子
 * @return routeName API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function routeName(userId: ApiTypes.UserId) {
    const API_PATH = '/routeName';
    const query: RouteNameQuery = {
        userId,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.RouteNameResult;
}

/**
 * reqRoute に渡すパラメータの内容を格納する型
 */
interface ReqRouteQuery {
    /** ユーザ識別子 */
    userId: ApiTypes.UserId,
    /** 経路の名前 */
    routeName: string,
};

/**
 * 全ての保存済み経路名情報を取得する。
 * 
 * @param userId ユーザ識別子
 * @param args その他の引数
 * @return reqRoute API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function reqRoute(userId: ApiTypes.UserId, args: ApiTypes.ReqRouteArg) {
    const API_PATH = '/reqRoute';
    const query: ReqRouteQuery = {
        userId,
        ...args,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.ReqRouteResult;
}

/**
 * reqPassable に渡すパラメータの内容を格納する型
 */
interface ReqPassableQuery {
    /** ユーザ識別子 */
    userId: ApiTypes.UserId,
};

/**
 * 全ての保存済み経路名情報を取得する。
 * 
 * @param userId ユーザ識別子
 * @return reqPassable API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function reqPassable(userId: ApiTypes.UserId) {
    const API_PATH = '/reqPassable';
    const query: ReqPassableQuery = {
        userId,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.ReqPassableResult;
}

/**
 * astar に渡すパラメータの内容を格納する型
 */
interface AstarQuery {
    /** ユーザ識別子 */
    userId: ApiTypes.UserId,
    /** ルートが通過すべき地点のリスト */
    data: ApiTypes.Position[],
};

/**
 * 地点を通るルートを探索する。
 * 
 * @param userId ユーザ識別子
 * @param args その他の引数
 * @return astar API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function astar(userId: ApiTypes.UserId, args: ApiTypes.AstarArg) {
    const API_PATH = '/astar';
    const query: AstarQuery = {
        userId,
        ...args,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.AstarResult;
}

/**
 * execRoute に渡すパラメータの内容を格納する型
 */
interface ExecRouteQuery {
    /** ユーザ識別子 */
    userId: ApiTypes.UserId,
    /** 実行する経路 */
    data: ApiTypes.Route,
    /** 巡回経路のとき真 */
    junkai: boolean,
};

/**
 * 新しい経路の実行を予約する。
 * 
 * @param userId ユーザ識別子
 * @param args その他の引数
 * @return execRoute API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function execRoute(userId: ApiTypes.UserId, args: ApiTypes.ExecRouteArg) {
    const API_PATH = '/execRoute';
    const query: ExecRouteQuery = {
        userId,
        ...args,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.ExecRouteResult;
}

/**
 * saveRoute に渡すパラメータの内容を格納する型
 */
interface SaveRouteQuery {
    /** ユーザ識別子 */
    userId: ApiTypes.UserId,
    /** 経路の名前 */
    routeName: string,
    /** 保存する経路 */
    data: ApiTypes.Route,
    /** 巡回経路のとき真 */
    junkai: boolean,
};

/**
 * 経路に名前を付けて保存する。
 * 
 * @param userId ユーザ識別子
 * @param args その他の引数
 * @return saveRoute API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function saveRoute(userId: ApiTypes.UserId, args: ApiTypes.SaveRouteArg) {
    const API_PATH = '/saveRoute';
    const query: SaveRouteQuery = {
        userId,
        ...args,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.SaveRouteResult;
}

/**
 * monitorCar に渡すパラメータの内容を格納する型
 */
interface MonitorCarQuery {
    /** ユーザ識別子 */
    userId: ApiTypes.UserId,
};

/**
 * ユーザに紐付いている経路の実行状況や車の情報を取得する。
 * 
 * @param userId ユーザ識別子
 * @return monitorCar API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function monitorCar(userId: ApiTypes.UserId) {
    const API_PATH = '/monitorCar';
    const query: MonitorCarQuery = {
        userId,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.MonitorCarResult;
}

/**
 * loginAdmin に渡すパラメータの内容を格納する型
 */
interface LoginAdminQuery {
    /** 管理者の名前 */
    adminName: string;
    /** 管理者のパスワード */
    adminPass: string;
}

/**
 * 管理者識別子を発行する。
 *
 * @param args その他の引数
 * @return loginAdmin API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function loginAdmin(args: ApiTypes.LoginAdminArg) {
    const API_PATH = '/loginAdmin';
    const query: LoginAdminQuery = {
        ...args,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.LoginAdminResult;
}

/**
 * terminateAdmin に渡すパラメータの内容を格納する型
 */
interface TerminateAdminQuery {
    /** 管理者識別子 */
    adminId: ApiTypes.AdminId,
}

/**
 * 管理者の識別子を無効にする。
 *
 * @param adminId 管理者識別子
 * @return terminateAdmin API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function terminateAdmin(adminId: ApiTypes.AdminId) {
    const API_PATH = '/terminateAdmin';
    const query: TerminateAdminQuery = {
        adminId,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.TerminateAdminResult;
}

/**
 * changePasswd に渡すパラメータの内容を確報する型
 */
interface ChangePasswdQuery {
    /** 管理者識別子 */
    adminId: ApiTypes.AdminId,
    /** 現在の管理者パスワード */
    currentPasswd: string,
    /** 新しい管理者パスワード */
    newPasswd: string,
}

/**
 * 管理者のパスワードを変更する。
 *
 * @param adminId 管理者識別子
 * @param args その他の引数
 * @return changePasswd API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function changePasswd(adminId: ApiTypes.AdminId, args: ApiTypes.ChangePasswdArg) {
    const API_PATH = '/changePasswd';
    const query: ChangePasswdQuery = {
        adminId,
        ...args,
    };
    const res = await fetch(
        API_PATH + API_SERVER,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.ChangePasswdResult;
}

/**
 * reqPassAdmin に渡すパラメータの内容を格納する型
 */
interface ReqPassAdminQuery {
    /** 管理者識別子 */
    adminId: ApiTypes.AdminId,
}

/**
 * 通行可能領域情報を取得する。
 *
 * @param adminId 管理者識別子
 * @return reqPassAdmin API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function reqPassAdmin(adminId: ApiTypes.AdminId) {
    const API_PATH = '/reqPassAdmin';
    const query: ReqPassAdminQuery = {
        adminId,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.ReqPassAdminResult;
}

/**
 * delPassable に渡すパラメータの内容を格納する型
 */
interface DelPassableQuery {
    /** 管理者識別子 */
    adminId: ApiTypes.AdminId,
    /** 削除する通行可能領域の識別番号 */
    passId: number[],
}

/**
 * 通行可能領域情報を削除する。
 *
 * @param adminId 管理者識別子
 * @param args その他の引数
 * @return delPassable API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function delPassable(adminId: ApiTypes.AdminId, args: ApiTypes.DelPassableArg) {
    const API_PATH = '/delPassable';
    const query: DelPassableQuery = {
        adminId,
        ...args,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.DelPassableResult;
}

/**
 * addPassable に渡すパラメータの内容を格納する型
 */
interface AddPassableQuery {
    /** 管理者識別子 */
    adminId: ApiTypes.AdminId,
    /** 追加する通行可能領域情報 */
    passPoints: ApiTypes.PassablePoint[];
}

/**
 * 通行可能領域を追加する。
 *
 * @param adminId 管理者識別子
 * @param args その他の引数
 * @return addPassable API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function addPassable(adminId: ApiTypes.AdminId, args: ApiTypes.AddPassableArg) {
    const API_PATH = '/addPassable';
    const query: AddPassableQuery = {
        adminId,
        ...args,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.AddPassableResult;
}

/**
 * manageCar に渡すパラメータの内容を格納する型
 */
interface ManageCarQuery {
    /** 管理者識別子 */
    adminId: ApiTypes.AdminId,
    /** 車両識別子 */
    carId: ApiTypes.CarId,
}

/**
 * 車状態を変更する。
 *
 * @param adminId 管理者識別子
 * @param args その他の引数
 * @return manageCar API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function manageCar(adminId: ApiTypes.AdminId, args: ApiTypes.ManageCarArg) {
    const API_PATH = '/manageCar';
    const query: ManageCarQuery = {
        adminId,
        ...args,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.ManageCarResult;
}

/**
 * reqCarInfo に渡すパラメータの内容を格納する型
 */
interface ReqCarInfoQuery {
    /** 管理者識別子 */
    adminId: ApiTypes.AdminId,
}

/**
 * 車情報を取得する。
 *
 * @param adminId 管理者識別子
 * @return reqCarInfo API の戻り値
 * @throws Fetch API に由来する例外
 */
export async function reqCarInfo(adminId: ApiTypes.AdminId) {
    const API_PATH = '/reqCarInfo';
    const query: ReqCarInfoQuery = {
        adminId,
    };
    const res = await fetch(
        API_SERVER + API_PATH,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(query),
        },
    );
    return await res.json() as ApiTypes.ReqCarInfoResult;
}
