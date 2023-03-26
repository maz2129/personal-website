export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/columbia-journalism.jpeg","images/columbia-logo.jpeg","images/grassroutes-logo.jpeg","images/headshot.jpg","images/incite-logo.jpeg","images/peloton-logo.jpeg","images/ssrc-logo.jpeg","images/thetake-logo.jpeg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8f7d893e.js","imports":["_app/immutable/entry/start.8f7d893e.js","_app/immutable/chunks/index.898f3223.js","_app/immutable/chunks/singletons.d29083b7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.03355c96.js","imports":["_app/immutable/entry/app.03355c96.js","_app/immutable/chunks/index.898f3223.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
