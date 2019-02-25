import {Dictionary} from '@ngrx/entity';

export class UriParameters {
  id: number;
  variables: Array<number>;
  parameters: Dictionary<string>;

  public constructor(id?: number, variables?: Array<number>, parameters?: Dictionary<string>) {
    this.id = id;
    this.variables = variables;
    this.parameters = parameters;
  }
}
