export class Resources {

    constructor(
        public id: number = 0,
        public name: string = '',
        public description: string = '',
        public userId: string = '',
        public url: string = '',
        public category: [string] = [''],
        public hasTags: [string] = [''],
        public notHaveTags: [string] = [''],
        public lastMondifiedDate?: Date 
      ) {  }

}
