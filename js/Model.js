/**********************************

MODEL!

**********************************/

function Model(loopy){

	var self = this;
	self.loopy = loopy;

	// Create canvas & context
	var canvas = _createCanvas();
	var ctx = canvas.getContext("2d");
	self.canvas = canvas;
	self.context = ctx;



	///////////////////
	// NODES //////////
	///////////////////

	// Nodes
	self.nodes = [];
	self.nodeByID = {};
	self.getNode = function(id){
		return self.nodeByID[id];
	};

	// ADD NODE
	self.addNode = function(config){
		var node = new Node(self,config);
		self.nodeByID[node.id] = node;
		self.nodes.push(node);
		return node;
	};


	///////////////////
	// EDGES //////////
	///////////////////

	// Edges
	self.edges = [];

	// ADD EDGE
	self.addEdge = function(config){
		var edge = new Edge(self,config);
		self.edges.push(edge);
		return edge;
	};



	///////////////////
	// UPDATE & DRAW //
	///////////////////

	self.update = function(){
	};

	self.draw = function(){

		// Clear!
		ctx.clearRect(0,0,self.canvas.width,self.canvas.height);

		// Draw edges THEN nodes
		for(var i=0;i<self.edges.length;i++) self.edges[i].draw(ctx);
		for(var i=0;i<self.nodes.length;i++) self.nodes[i].draw(ctx);

	};



	////////////////////
	// HELPER METHODS //
	////////////////////

	self.getNodeByPoint = function(x,y,buffer){
		var result;
		for(var i=self.nodes.length-1; i>=0; i--){ // top-down
			var node = self.nodes[i];
			if(node.isPointInNode(x,y,buffer)) return node;
		}
		return null;
	};

}