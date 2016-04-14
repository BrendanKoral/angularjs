(function(){

	var app = angular.module('myQuiz', []);

    app.controller('QuizController',['$scope','$http','$sce',function($scope,$http,$sce){
        
        $scope.score = 0;
        $scope.activeQuestion = -1;
        //Allows us to load the intro screen. Otherwise, it will load item 0 from array
        $scope.activeQuestionAnswered = 0;
        $scope.percentage = 0;

        $http.get('quiz_data.json').then(function(quizData){
            //Puts quiz data in the quizData object
            //Then store it in the variable called myQuestions
            $scope.myQuestions = quizData.data;
            $scope.totalQuestions = $scope.myQuestions.length
            //Create totalQuestions variable using length of myQuestions
        });
        
    }]);

})();