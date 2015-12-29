/**
 * Created by Administrator on 2015/6/2.
 */
module d5power {

    export class NpcData {
        public id:number; //npc Id
        public isDB:number = 0;
        public name:string;//npc ��
        public skin:string;//npc Ƥ��
        public head:string;//npc ͷ��
        public inmap:number;//���ڵ�ͼ

        public constructor(){
        }
        public format(xml:any):void{
            this.id = parseInt(xml.id);
            if(xml.isDB)
            {
                this.isDB = parseInt(xml.isDB);
            }
            this.name = <string><any>(xml.name);
            this.skin = <string><any>(xml.skin);
            this.head = <string><any>(xml.head);
            this.inmap = parseInt(xml.inmap);
        }

        public toString():string{
            return "npc["+this.id+"]"+this.name+"[Ƥ��]"+this.skin+"[���ڵ�ͼ]"+this.inmap;
        }
    }
}
