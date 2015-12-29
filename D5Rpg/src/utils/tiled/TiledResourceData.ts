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
module d5power {
	/**
	 * tiled 图片纹理集
	 * @author 
	 *
	 */
	export class TiledResourceData {
    	
        private static _resource:egret.SpriteSheet;
        
        private static _resourceLib:any={};
        
        private static _name:string;
        private static _bitmap: egret.Texture;
		public constructor() {
		}
	
        public static setupResLib(name:string,bitmap: egret.Texture,tiledset:TiledTileSet) 
        {
            this._bitmap = bitmap;
            if(!TiledResourceData._bitmap)
                return;
            var spritesheet:egret.SpriteSheet = new egret.SpriteSheet(bitmap);
            var data: Array<any>;
            if(TiledResourceData._resourceLib[name])
            {
                data = TiledResourceData._resourceLib[name];
            }else
            {
                data = new Array<any>();
            }
            
            var num: number = 0;
            for(var i: number = 0;i < tiledset.numCols;i++)
                {
                    for(var j: number = 0;j < tiledset.numRows;j++)
                    {
                    
                        spritesheet.createTexture(name+tiledset.firstGID+num,j*tiledset.tileWidth,i*tiledset.tileHeight,tiledset.tileWidth,tiledset.tileHeight);
                        var txt: egret.Texture = spritesheet.getTexture(name+tiledset.firstGID+num);
                        data[tiledset.firstGID + num] = txt;
                        num++;
                  }
             }
            TiledResourceData._resourceLib[name] = data;
        }
    
        public static getResource(name:string,id:number):egret.Texture
        {
//            if(TiledResourceData._resourceLib[name])
//            {
//                var res: egret.SpriteSheet = <egret.SpriteSheet><any>TiledResourceData._resourceLib[name];
//                if(res && id > 0)
//                {
//                    return res.getTexture(name + id);
//                }else
//                {
//                    return null;
//                }
//            }else{
//                return null;
//            }
            
            if(TiledResourceData._resourceLib[name])
            {
                var data: Array<any> = TiledResourceData._resourceLib[name];
                var txt: egret.Texture;
                txt = data[id] ? <egret.Texture><any>data[id]:null;
                return txt;   
            }else
            {
                return null;
            }
            
        }
	}
}
