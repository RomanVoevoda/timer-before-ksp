export class eventMixin {
	private _eventHandlers: any;

	public on(eventName: string, handler: () => void) {
		if(!this._eventHandlers) this._eventHandlers = {};
		if(!this._eventHandlers[eventName]) {
			this._eventHandlers[eventName] = [];
		}
		
		this._eventHandlers[eventName].push(handler);
	}
	
	public off(eventName: string, handler: () => void) {
		let handlers = this._eventHandlers && this._eventHandlers[eventName];
		
		if(!handlers) return;
		
		for(let i = 0; i < handlers.length; i++) {
			if(handlers[i] === handler) {
				handlers.splice(i--, 1);
			}
		}
	}

  
	public trigger(eventName: string, ...args: any[]) {
	  if(!this._eventHandlers || !this._eventHandlers[eventName]) {
		  return; 
		}
		
		this._eventHandlers[eventName].forEach((handler: () => void) => handler.apply(this, args));
	}
}