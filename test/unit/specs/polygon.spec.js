const Map = require('ti.map');

var polygon = Map.createPolygon({
	points: [ {
		latitude: -33.854429,
		longitude: 151.214429
	},
	{
		latitude: -33.854928,
		longitude: 151.236101
	},
	{
		latitude: -33.866189,
		longitude: 151.232668
	}
	],
	strokeColor: Map.D2BE1F,
	fillColor: Map.BFFFE725,
	strokeWidth: 5,
	zIndex: 2
});

describe('ti.map.Polygon', function () {
	it('should have valid center', () => {
		expect(polygon.points).toEqual([ {
			latitude: -33.854429,
			longitude: 151.214429
		},
		{
			latitude: -33.854928,
			longitude: 151.236101
		},
		{
			latitude: -33.866189,
			longitude: 151.232668
		}
		]);
	});

	it('should have valid strokeWidth', () => {
		expect(polygon.strokeWidth).toEqual(5);
	});

	it('should have valid strokeColor', () => {
		expect(polygon.strokeColor).toEqual(Map.D2BE1F);
	});

	it('should have valid fillColor', () => {
		expect(polygon.fillColor).toEqual(Map.BFFFE725);
	});

	it('should have valid zIndex', () => {
		expect(polygon.zIndex).toEqual(2);
	});

});