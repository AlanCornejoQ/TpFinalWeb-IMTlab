import { Componente } from './component.model';

export class Prestamo {
  id: number;
  name: string;
  description: string;
  status: number;
  componentId: number;
  component: Componente;
  dateIn: Date;
  dateOut: Date;

  constructor(data: Partial<Prestamo> = {}) {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.status = 0;
    this.componentId = 0;

    if (data) {
      Object.assign(this, data);
    }

    if (data.dateIn) {
      this.dateIn = new Date(data.dateIn);
    }

    if (data.dateOut) {
      this.dateIn = new Date(data.dateOut);
    }
    if (data.component) {
      this.component = new Componente(data.component);
    }
  }

  get diasRestantes(): number {
    var date = this.dateOut.getDate() - this.dateIn.getDate();
    return date;
  }
}
