define( ["qlik", "text!./template.html","css!./style.css"],

	function ( qlik, template ) {
		var AssLev= {};
		function getLevel(key,d){
			$.each(d,function(k,v){
				//console.log(k,v);
				//AssLev.push({key:1,Val:d});
				AssLev[key]=d;
			});
		}
		return {
		initialProperties: {
			Level1: [],
			Level2: []
        },
		definition : {
			type : "items",
			component : "accordion",
			items: {
				Levels: {
					label:"Levels",
					items:{
						Primary:{
								label:"",
								items:{
									Primarylabel: {
										type: "string",
										ref: "Primarylabel",
										label: "Primary Level Name",
										expression: "optional",
										defaultValue:"Primary"
									},
									Primaryexpr: {
										type: "string",
										ref: "Primaryexpr",
										label: "Primary Container Value",
										expression: "optional"
									},
								}
						},
						Level_1:{
							type: "array",
							ref: "Level1",
							label: "List Level 1",
							itemTitleRef: "label",
							allowAdd: true,
							allowRemove: true,
							addTranslation: "Add Level 1",
							items: {
								label: {
									type: "string",
									ref: "label",
									label: "Level 1 Name",
									expression: "optional"
								},
								expr: {
									type: "string",
									ref: "expr",
									label: "Container Value",
									expression: "optional"
								},
								Add_css: {
									type: "string",
									ref: "Add_css",
									label: "Additional CSS",
									expression: "optional"
								},
								isParent: {
									type: "boolean",
									label: "Is Parent",
									ref: "isParent",
									defaultValue: true
								},
								
								/*level: {
									type: "number",
									ref: "level",
									label: "level at",
									show:function(d){
										return !d.isParent;
									}
								},*/
								selectLevel: {
									type: "string",
									component: "dropdown",
									label: "Select Level",
									ref: "selectLevel",
									options: function(d,e){
										return e.layout.Level1.map(function(v){
											//if(!v.isParent){
												return {
													value:v.label+"",
													label:v.label+""
												}
											//}
										});
									},
									show:function(d){
										return !d.isParent;
									}
								},
								isCondShowHide: {
									type: "boolean",
									label: "Is Show/Hide",
									ref: "isCondShowHide",
									defaultValue: false
								},
								Hide_expr: {
									type: "string",
									ref: "Hide_expr",
									label: "Hide Expression",
									expression: "optional",
									defaultValue: "0",
									show:function(d){
										return d.isCondShowHide;
									}
								}
								//end
							}
							//end
						}
					}
				},
				//end
				settings: {
					uses: "settings",
					items: {
						
						
						
					}
				}
			}
		},
			template: template,
			support: {
				snapshot: true,
				export: true,
				exportData: false
			},
			paint: function () {
				//element,layout
				//console.log(this.$scope.layout.Level1);
			

				return qlik.Promise.resolve();
			},
			controller: ['$scope', function ( /*$scope*/ ) {
				//add your rendering code here
				//console.log($scope.layout.Level1);
				
				//$('#parent').append(makeContainer("test","test value"));
				//$('#parent').append(makeContainer("test2","test2 value"));


			}]
		};

	} );


function makeContainer(Label,Value){
	var id=Label;
	var htm='<ol id="'+id+'"><li>'+
				'<div>'+
					'<h1>'+Label+'</h1>'+
					'<span>'+Value+'</span>'+
				'</div>'+
			'</li></ol>';
	return htm;
}

