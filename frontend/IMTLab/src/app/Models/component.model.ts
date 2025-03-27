export class Componente {
  id: number;
  name: string;
  description: string;

  constructor(data: Partial<Componente> = {}) {
    this.id = 0;
    this.name = '';
    this.description = '';

    if (data) {
      Object.assign(this, data);
    }
  }
}
