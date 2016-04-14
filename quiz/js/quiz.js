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
            $scope.totalQuestions = $scope.myQuestions.length;
            //Create totalQuestions variable using length of myQuestions
        });

        $scope.selectAnswer = function(qIndex,aIndex){
            var questionState = $scope.myQuestions[qIndex].questionState;
            //Set questionState variable equal to the question state of the question answered

            if( questionState != 'answered' ){
                $scope.myQuestions[qIndex].selectedAnswer = aIndex;
                var correctAnswer = $scope.myQuestions[qIndex].correct;
                $scope.myQuestions[qIndex].correctAnswer = correctAnswer;

                if( aIndex === correctAnswer ){
                    $scope.myQuestions[qIndex].correctness = 'correct';
                    $scope.score += 1;
                }else{
                    $scope.myQuestions[qIndex].correctness = 'incorrect';
                }
                $scope.myQuestions[qIndex].questionState = 'answered';
            }
            $scope.percentage = (($scope.score / $scope.totalQuestions)*100).toFixed(0);
        };

        $scope.isSelected = function(qIndex,aIndex){
          return $scope.myQuestions[qIndex].selectedAnswer === aIndex;
        };
        $scope.isCorrect = function(qIndex,aIndex){
            return $scope.myQuestions[qIndex].correctAnswer === aIndex;
        };

        $scope.selectContinue = function(){
            return $scope.activeQuestion += 1;
        };

        $scope.createShareLinks = function(percentage){
          var url = 'http://brendankoral.com';
          var emailLink = '<a class="btn email" href="mailto:?subject=Try to beat my quiz score!&body=I scored a '+percentage+'%25 on this quiz about Saturn. Try to beat my score at '+url+'">Email a friend</a>';
          var twitterLink = '<a class="btn twitter" target="_blank" href="http://twitter.com/share?text=I scored a '+percentage+'%25 on this quiz about Saturn. Try to beat my score at&amp;hashtags=SaturnQuiz&amp;url='+url+'">Tweet your score</a>';
          var newMarkup = emailLink + twitterLink;
          return $sce.trustAsHtml(newMarkup);
        }

    }]);

})();