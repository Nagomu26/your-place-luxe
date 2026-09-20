import type { Service } from "../lib/types";

export const SERVICIOS: Service[] = [
  { id: "inicial", nombre: "Asesoria inicial", precio: 25, descripcion: "Primera consulta para conocer tu caso, sin compromiso." },
  { id: "plan", nombre: "Plan a medida", precio: 40, descripcion: "Propuesta adaptada a lo que necesitas, paso a paso.", destacado: true },
  { id: "gestion", nombre: "Gestion y seguimiento", precio: 20, descripcion: "Te acompanamos en el dia a dia para que no falte de nada." },
  { id: "urgente", nombre: "Prioridad express", precio: 15, descripcion: "Necesitas respuesta rapida? Lo resolvemos cuanto antes." }
];