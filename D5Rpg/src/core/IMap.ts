//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, MicroGame Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
module d5power
{
    /**
     * 游戏地图
     */
    export interface IMap
    {
        /**
         * 地图ID
         */
        id:number;

        setTileFormat(s:string):void;

        setContainer(container:egret.DisplayObjectContainer):void;
        /**
         * 初始化地图
         * @param id        地图ID
         * @param w         地图尺寸
         * @param h         地图尺寸
         * @param tw        地砖尺寸
         * @param th        地砖尺寸
         * @param onReady   地图准备回叫
         * @param onReadyThis 回叫对象
         */
        setup(id:number,w:number,h:number,tw:number,th:number,onReady:Function,onReadyThis:any):void;
        /**
         *初始化tiled地图
         * @param name tiled地图名
         * @param type tiled地图填充方式
         * @param container 容器
         */ 
        setupTiled(name:string,type:number,data:Array<any>,container:egret.DisplayObjectContainer):void;
        /**
         * 初始化远景地图
         * @param name 远景地图
         * @param type 远景填充方式
         * @param container 容器
         */ 
        setupFar(name:string,type:number,container:egret.DisplayObjectContainer,far_x:number,far_y:number):void;

        getWorldPostion(x:number, y:number):egret.Point;

        getScreenPostion(x:number, y:number):egret.Point;

        tile2WorldPostion(x:number, y:number):egret.Point;

        Postion2Tile(px:number, py:number):egret.Point;

        getPointAround(center:egret.Point,from:egret.Point,r:number):egret.Point;

        runPos(list:Array<IGD>):void;

        width:number;

        height:number;

        tileWidth:number;

        tileHeight:number;

        roadWidth:number;

        roadHeight:number;

        render(flush:boolean):void;

        clear():void;

        reset():void;
        /**
         * @param		xnow	当前坐标X(寻路格子坐标)
         * @param		ynow	当前坐标Y(寻路格子坐标)
         * @param		xpos	目标点X(寻路格子坐标)
         * @param		ypos	目标点Y(寻路格子坐标)
         */
        find(xnow:number,ynow:number,xpos:number,ypos:number):Array<any>;

        /**
         * 判断某一个路点是否可通过
         * @param px
         * @param py
         */
        getRoadPass(px:number,py:number):boolean;

        /**
         * 判断某一个点是否透明
         * @param px
         * @param py
         */
        isInAlphaArea(px:number,py:number):boolean;
        /**
         * 设置重力感应
         * @param  b   boolean 
         */ 
        setDeviceorientation(b:boolean):void     
    }
}