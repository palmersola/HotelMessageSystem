export class Template {
      constructor(name) {
            this.name = name
      }

      getMessage = () => eval(`\`${this.name}\``)
}