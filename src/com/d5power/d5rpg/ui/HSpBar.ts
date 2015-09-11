/**
 * Created by Administrator on 2015/6/11.
 */
module d5power {
    export class HSpBar extends CharacterStuff
    {
        private color:number;
        /**
         * @param		target		跟踪目标
         * @param		attName		跟踪属性名
         * @param		attMaxName	最大值跟踪
         * @param		ytype		Y轴位置，若大于1则使用该值进行定位
         * @param		resource	使用素材
         */
        public constructor(target:IGD,attName:string,attMaxName:string,ytype:number = 1,color:number = 0x990000)
        {
            super(target,attName,attMaxName);
            this.color = color;
            this.y = ytype;
            this.x = -(this._size>>1);

            this.update();
        }
        /**
         * 当前值
         */
        private _nowVal:number;

        public static UP:number = 0;
        public static DOWN:number = 1;

        private  _size:number = 50;
        /**
         * 上次渲染的值，用来进行渲染优化，同值不渲染
         */
        private _lastRender:number;



        private waitForFly(e:egret.TimerEvent):void
        {
        }

        /**
         * 渲染
         * @param		buffer		缓冲区
         * @param		p			角色的标准渲染坐标
         */
        public update():void
        {
            if(this._lastRender==this._target[this._attName]) return;
            this._lastRender = this._target[this._attName];
            this.graphics.clear();
            this.graphics.beginFill(this.color);
            this.graphics.drawRect(0,0,<number>(this._size*this._target[this._attName]/this._target[this._attMaxName]),4);
            this.graphics.endFill();
            this.graphics.lineStyle(1);
            this.graphics.lineTo(this._size,0);
            this.graphics.lineTo(this._size,4);
            this.graphics.lineTo(0,4);
            this.graphics.lineTo(0,0);

        }

    }
}