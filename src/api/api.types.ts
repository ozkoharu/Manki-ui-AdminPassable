/** @module ApiTypes */

/**
 * API の戻り値の原始型
 */
interface ApiResult {
  /** API 呼び出しに成功したときに真 */
  succeeded: boolean;
  /** API 呼び出しに失敗した理由（失敗時のみ） */
  reason?: string;
}

/**
 * API 呼び出しに用いられる識別子の原始型
 */
type GeneralId = string;

/**
 * ユーザ識別子の型
 */
export type UserId = GeneralId;

/**
 * 管理者識別子の型
 */
export type AdminId = GeneralId;

/**
 * 車両識別子の型
 */
export type CarId = GeneralId;

/**
 * createUser の戻り値の型
 */
export interface CreateUserResult extends ApiResult {
  /** 発行されたユーザ識別子 */
  userId?: UserId;
}

/**
 * terminate の戻り値の型
 */
export interface TerminateResult extends ApiResult {
  /* Nothing yet */
}

/**
 * endRoute の戻り値の型
 */
export interface EndRouteResult extends ApiResult {
  /* Nothing yet */
}

/**
 * proceedRoute の戻り値の型
 */
export interface ProceedRouteResult extends ApiResult {
  /* Nothing yet */
}

/**
 * isAcceptable の戻り値の型
 */
export interface IsAcceptableResult extends ApiResult {
  /* Nothing yet */
}

/**
 * routeName で利用される保存済経路情報の型
 */
export interface PassableName {
  /** 経路の名前 */
  routeName: string;
  /** 経路を利用できるとき真 */
  available: boolean;
}

/**
 * routeName の戻り値の型
 */
export interface RouteNameResult extends ApiResult {
  /** 保存済み経路情報のリスト */
  passableNames?: PassableName[];
}

/**
 * 緯度と経度の対を表す型
 */
export interface Position {
  /** 北緯を正とする緯度（度数法） */
  lat: number;
  /** 東経を正とする経度（度数法） */
  lng: number;
}

/**
 * ルート（停留所-停留所の道程）を表すための型
 */
export type SubRoute = Position[];

/**
 * 経路を表すための型
 */
export type Route = SubRoute[];

/**
 * reqRoute のパラメータの型
 */
export interface ReqRouteArg {
  /** 経路の名前 */
  routeName: string;
}

/**
 * reqRoute の戻り値の型
 */
export interface ReqRouteResult extends ApiResult {
  /** 経路 */
  route?: Route;
  /** 経路に含まれる停留所のリスト */
  dest?: Position[];
  /** 巡回経路のとき真 */
  junkai?: boolean;
}

/**
 * 通行可能領域のそれぞれの円を現す型
 */
export interface PassablePoint {
  /** 通行可能領域の中央座標 */
  position: Position;
  /** 通行可能領域の半径 */
  radius: number;
}  

/**
 * 通行可能領域情報を表す型
 */
export interface PassableInfo extends PassablePoint {
  /** 通行可能領域の識別子 */
  passableId: number;
}

/**
 * reqPassable の戻り値の型
 */
export interface ReqPassableResult extends ApiResult {
  /** 通行可能領域情報のリスト */
  passableInfo?: PassableInfo[];
}

/**
 * astar のパラメータの型
 */
export interface AstarArg {
  /** 通過すべき地点のリスト */
  data: Position[];
}

/**
 * astar の戻り値の型
 */
export interface AstarResult extends ApiResult {
  /** 生成されたルート */
  route?: SubRoute;
}

/**
 * ExecRoute のパラメータの型
 */
export interface ExecRouteArg {
  /** 実行する経路 */
  data: Route;
  /** 巡回経路のとき真 */
  junkai: boolean;
}

/**
 * ExecRoute の戻り値の型
 */
export interface ExecRouteResult extends ApiResult {
  /* Nothing yet */
}

/**
 * saveRoute のパラメータの型
 */
export interface SaveRouteArg {
  /** 経路の名前 */
  routeName: string;
  /** 保存する経路 */
  data: Route;
  /** 巡回経路のとき真 */
  junkai: boolean;
}

/**
 * saveRoute の戻り値の型
 */
export interface SaveRouteResult extends ApiResult {
  /** 経路の名前 */
  routeName?: string;
}

/**
 * monitorCar の戻り値の型
 */
export interface MonitorCarResult extends ApiResult {
  /** 車の割り当てがあるときに真 */
  reserve?: boolean;
  /** 実行している経路 */
  route?: Route;
  /** 実行している経路に含まれる停留所のリスト */
  dest?: Position[];
  /** 実行している経路が巡回経路のときに真 */
  junkai?: boolean;
  /** 停留所で停まっているときに真 */
  arrival?: boolean;
  /** 目的地に停まっているときに真 */
  finish?: boolean;
  /** 経路の始点に到達済のときに真 */
  arrange?: boolean;
  /** 車が正常状態であるときに真 */
  status?: boolean;
  /** 車の現在位置 */
  nowPoint?: Position;
  /** 車のバッテリ残量 */
  battery?: number;
}

/**
 * loginAdmin に渡すパラメータの型
 */
export interface LoginAdminArg {
  /** 管理者の名前 */
  adminName: string;
  /** 管理者のパスワード */
  adminPass: string;
}

/**
 * loginAdmin の戻り値の型
 */
export interface LoginAdminResult extends ApiResult {
  /** 管理者識別子 */
  adminId?: AdminId;
}

/**
 * terminateAdmin の戻り値の型
 */
export interface TerminateAdminResult extends ApiResult {
  /* Nothing yet */
}

/**
 * changePasswd に渡すパラメータの型
 */
export interface ChangePasswdArg {
  /** 現在の管理者パスワード */
  currentPasswd: string;
  /** 新しい管理者パスワード */
  newPasswd: string;
}

/**
 * changePasswd の戻り値の型
 */
export interface ChangePasswdResult extends ApiResult {
  /* Nothing yet */
}

/**
 * reqPassAdmin の戻り値の型
 */
export interface ReqPassAdminResult extends ApiResult {
  /** 通行可能領域情報のリスト */
  passableInfo?: PassableInfo[];
}

/**
 * delPassable に渡すパラメータの型
 */
export interface DelPassableArg {
  /** 削除する通行可能領域の識別番号 */
  passId: number[];
}

/**
 * delPassable の戻り値の型
 */
export interface DelPassableResult extends ApiResult {
  /* Nothing yet */
}

/**
 * addPassable に渡すパラメータの型
 */
export interface AddPassableArg {
  /** 追加する通行可能領域情報 */
  passPoints: PassablePoint[];
}

/**
 * addPassable の戻り値の型
 */
export interface AddPassableResult extends ApiResult {
  /* Nothing yet */
}

/**
 * manageCar に渡すパラメータの型
 */
export interface ManageCarArg {
  /** 車両識別子 */
  carId: CarId;
}

/**
 * manageCar の戻り値の型
 */
export interface ManageCarResult extends ApiResult {
  /* Nothing yet */
}

/**
 * 車情報を表す型
 */
export interface CarInfo {
  /** 車両識別子 */
  carId: CarId;
  /** 車の状態 */
  status: number;
  /** 現在位置 */
  nowPoint: Position;
  /** バッテリ残量 [%] */
  battery: number;
  /** 最終通信時刻 */
  lastAt: string;
}

/**
 * reqCarInfo の戻り値の型
 */
export interface ReqCarInfoResult extends ApiResult {
  /** 車情報 */
  carInformations?: CarInfo[];
}
