import Field from './Field'
import Container from './Container'

class Inject {
  public async execute(fields: Array<Field>) {
    await fields.map(field => this.inject(field))

    console.log(Container.get('Name'))
  }

  private async inject(field: Field) {
    const name = `${field.charAt(0).toLocaleUpperCase()}${field.slice(1)}`
    const result = await import(/* webpackChunkName: "[request]" */ `./Rules/${name}`)

    Container.add(name, () => {
      return new result[name]
    })
  }
}

export default new Inject
