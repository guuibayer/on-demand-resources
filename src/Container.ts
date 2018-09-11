export default class Container {

  private static container: object = {}

  public static add(key: string, lazy: Function, share: boolean = true): void {
    this.container[key] = {
      lazy,
      share,
      cache: null
    }
  }

  public static get(key: string, params: Array<any> = null): Function {
    let result = this.container[key].lazy.apply(window, params)

    if (this.container[key].share) {
      this.container[key].cache = result
    }

    return result
  }
}
