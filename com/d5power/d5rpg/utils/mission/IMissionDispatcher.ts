
module d5power {

	export interface IMissionDispatcher{

		missionNum:number;
		getMissionByIndex(index:number):MissionData;
		getMissionById(id:number):MissionData;
		onAddMission(f:Function,thisobj:any):void;
		addMissionById(mission_id:number):void;
		setStartMission(v:number);
		startMission:number;
		flushMission():void;
		hasMission(mid:number):boolean;
		hasMissionById(id:number):boolean;
		lastMissionid:number;
		deleteMission(m:MissionData):void;

		publicCheck(type:number,value:string,num:string):boolean
		/**
		 * 是否具备某个条件的独立检查器
		 */ 
		hasChecker(type:number):boolean
		/**
		 * 是否具备某个任务
		 */ 
		hasMission(mid:number):boolean
		/**
		 * 检查某物品数量
		 */ 
		hasItemNum(itemid:number):number;
		/**
		 * 是否和某NPC对话过
		 */ 
		hasTalkedWith(npcid:number):boolean;
		/**
		 * 杀死怪物数量
		 */ 
		killMonseterNum(monsterid:number):number;
		/**
		 * 玩家属性达到
		 */ 
		userPro(pro_name:string,value:number):boolean;
		/**
		 * 得到某物品
		 */ 
		getItem(itemid:number,num:number,packageid:number,equ:boolean):boolean;
		
		/**
		 * 获得经验
		 */ 
		getExp(num:number):void;
		
		/**
		 * 获得某个任务
		 */  
		addMissionById(id:number):void;
		/**
		 * 获得游戏币
		 */ 
		getMoney(num:number):boolean;
		/**
		 * 拥有BUFF
		 */ 
		hasBuff(id:number):boolean;
		/**
		 * 装备了某道具
		 */ 
		hasEqu(id:number):boolean;
		
		/**
		 * 是否具备某技能
		 * @param		lv 为0时不判断级别，否则需要等级大等于
		 */ 
		hasSkill(id:number,lv:number):boolean;
		
		/**
		 * 是否具备某皮肤
		 */ 
		hasSkin(path:string):boolean;
//		/**
//		 * 可见某任务
//		 */ 
//		function getCanSeeMission(id:uint):void;
//		/**
//		 * 不可见某任务
//		 */ 
//		function lostCanSeeMission(id:uint):void; 
	}
}