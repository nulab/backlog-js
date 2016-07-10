declare module "form-data" {
  export default class FormData {
    append(key: string, value: any, options?: any): FormData;
    getHeaders(): Object;
    pipe(to: any): any;
    submit(params: string | Object, callback: (error: any, response: any) => void): any;
  }
}
