/**
 * @Desafío Frontend - Ordenador en serie
 *
 * @version 		1.0
 *
 * @author			Julio Laveriano < julioantonio.lp@gmail.com
 *
 * History
 * v1.0 – Se mejoró el efecto visual de los números ingresados
 * ----
 */
var app = angular.module('AppOrdenando',[]);

app.controller('DesaCtrl', function($scope) {

	/**
	* Controlador DesaCtrl inicializando variables generales
	* @param  {integer}
	* @return  {array}
	*/
	$scope.numEntero = 1;
	$scope.numRepetido = true;
	$scope.posicionPro = 0;
	$scope.posicion = 0;
	$scope.valDefault = [6, 5, 3, 1, 8, 7, 2, 4];

	/**
	* Función Limpiar valores numéricos de la vista
	* @param  {string}
	* @return  {empty} valor vacío
	*/
	$scope.limpiar = function() {

		$scope.valDefault = [];
		$scope.numEntero = 1;
		$scope.numRepetido = false;
		$scope.posicion = 0;
		$scope.posicionPro = 0;

	};

	/**
	* Función poner valores por defecto
	* @param  {integer}
	* @return  {array}
	*/
	$scope.defecto = function() {

		$scope.limpiar();
		$scope.valDefault = [6, 5, 3, 1, 8, 7, 2, 4];

	};

	/**
	* Función valor numérico nuevo
	* @param  {integer}
	* @return  {numero} valor ingresado
	*/
	function ValorNuevo(value) {

		return $scope.valDefault.indexOf(value) == -1;

	}

	/**
	* Función agregar número a la lista del arreglo
	* @param  {integer}
	* @return  {array}
	*/
	$scope.agregarNumero = function() {

		if (ValorNuevo($scope.numEntero)) {
			$scope.valDefault.push($scope.numEntero);
			$scope.numEntero = 1;
		} else {
			alert('El número: '+$scope.numEntero+' ya ha sido ingresado, por favor ingrese un número diferente!!!');
		}

	};

	/**
	* Función ordenar todos los números de la vista, recorrido por los números
	* @param  {integer}
	* @return  {array}
	*/
	$scope.ordenarYA = function() {

		angular.forEach($scope.valDefault, function(value, key) {
			console.log("lng: " + key);
			searching(key);
		});

	};

	/**
	* Función ordenar números por posición
	* @param  {integer}
	* @return  {array}
	*/
	$scope.ordenarPorPosicion = function() {

		var lng = $scope.valDefault.length,
			pos = $scope.posicion;

		if ($scope.posicionPro > 0) {
			pos = $scope.posicionPro;
		}

		console.log("lng: " + pos);

		if (pos <= lng) {
			buscarNumeros(pos);
		}

	};

	/**
	* Función para comparar los valores numéricos
	* @param  {integer}
	* @return  {array}
	*/
	function searching(posicion) {

		var n1 = $scope.valDefault[posicion],
			n2 = $scope.valDefault[posicion - 1];

		if (n2 == null) {
			return;
		}

		if (n1 < n2) {
			console.log(n1 + " < " + n2);
			console.log(".:. trasladamos " + n1 + " a la posicion " + n2);

			var temp = $scope.valDefault[posicion - 1];
			$scope.valDefault[posicion - 1] = $scope.valDefault[posicion];
			$scope.valDefault[posicion] = temp;

			return searching(posicion - 1);
		} else {
			console.log(n1 + " > " + n2);
		}

	};

	/**
	* Función busqueda de números para compararlos uno a uno
	* @param  {integer}
	* @return  {string}
	*/
	function buscarNumeros(posicion) {

		var n1 = $scope.valDefault[posicion],
			n2 = $scope.valDefault[posicion - 1];

		if (n2 == null) {
			$scope.posicion++;
			$scope.posicionPro = 0;
			return false;
		}

		if (n1 < n2) {
			console.log(n1 + " < " + n2);
			console.log(".:. trasladamos " + n1 + " a la posicion " + n2);
			var temp = $scope.valDefault[posicion - 1];
			$scope.valDefault[posicion - 1] = $scope.valDefault[posicion];
			$scope.valDefault[posicion] = temp;
			$scope.posicionPro = posicion - 1;
			return true;
		} else {
			console.log(n1 + " > " + n2);
			$scope.posicion++;
			$scope.posicionPro = 0;
			return false;
		}

	};

	/**
	* Función colorea la posición del recorrido, pintandolo en la vista mediante clases actual y anterior
	* @param  {integer}
	* @return  {string}
	*/
	$scope.marcarPos = function(index) {

		if ( ( index == $scope.posicionPro ) && ( $scope.posicionPro > 0 ) ) {
			return "actual";
		} else if ( index < $scope.posicion ) {
			return "anterior";
		} else if ( ( index == $scope.posicion ) && ( $scope.posicionPro == 0 ) ) {
			return "actual";
		} else {
			console.log('moving to number...');
		}

	};

});