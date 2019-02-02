(function () {
  'use strict';

  angular
    .module('resume', ['ngTouch', 'ngAria', 'ui.router', 'angularMoment', 'toastr']);

})();

(function () {
  'use strict';

  angular
    .module('resume')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr) {

    activate();

    function activate() {
      toastr.info('Hi There, This site is developed in Angularjs');
    }
  }
})();

(function () {
  'use strict';

  angular
    .module('resume')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock Activated');
    $rootScope.year = moment().year();
  }

})();

(function () {
  'use strict';

  angular
    .module('resume')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('home');
  }

})();

(function () {
  'use strict';

  angular
    .module('resume')
    .constant('CONSTANT', constant);

  /** @ngInject */
  function constant() {

  }
})();

(function() {
  'use strict';

  angular
    .module('resume')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 10000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();

angular.module('resume').run(['$templateCache', function($templateCache) {$templateCache.put('app/components/bio.html','<h2 id=titleName class=sectionHead>Karthik Girraju</h2><div id=bio><h2>M.S.S.E GRADUATE</h2><!--SOCIAL ICONS--><div id=socialIcons><a class=socialIcon target=_blank id=facebookIcon href=https://www.facebook.com/karthikgirraju></a> <a class=socialIcon target=_blank id=twitterIcon href=https://twitter.com/karthikgirraju></a> <a class=socialIcon target=_blank id=youTubeIcon href=https://www.youtube.com/c/KarthikGirraju></a> <a class=socialIcon target=_blank id=gplusIcon href=https://plus.google.com/+KarthikGirraju></a></div><!--end socialIcons--><!--BIO PARAGRAPH--><ul><li>Graduated M.S.S.E from Vellore Institute of Technology, Tamil Nadu.</li><li>Proficient in all aspects of Front-End and Back-End development.</li><li>Good page layout and design skills, multitasking and handling projects from concept stage to final deliverable.</li></ul></div><!--end bio--><script>var view = $(window),\r\n    html = $(\'html\'),\r\n    body = $(\'body\');\r\n\r\n  $(\'#titleName, #socialIcons\').clone().appendTo(\'#sticker\');\r\n\r\n  function responsive() {\r\n    if (view.width() < 820) {\r\n      body.addClass(\'respond\');\r\n    } else {\r\n      body.removeClass(\'respond\');\r\n    }\r\n  }\r\n\r\n  responsive();\r\n\r\n  view.scroll(function () {\r\n    //SHOW/HIDE TOP PANEL\r\n    if (view.scrollTop() > 140) {\r\n      $(\'#sticker\').stop().animate({top: "0"}, 500);\r\n    } else {\r\n      $(\'#sticker\').stop().animate({top: "-60px"}, 500);\r\n    }\r\n\r\n    //PARALLAX BACKGROUND STUFF\r\n    var scrollPosition = $(window).scrollTop() * .25;\r\n    body.css({backgroundPosition: \'0px -\' + scrollPosition + \'px\'});\r\n  });\r\n\r\n  view.resize(function () {\r\n    responsive();\r\n  });\r\n\r\n  view.load(function () {\r\n    responsive();\r\n  });</script><div class=clear></div>');
$templateCache.put('app/components/contact.html','<h2 id=contact class=sectionHead>Contact Me</h2><!--CONTACT FORM--><div id=contactform class=contact><div id=map></div><!-- Contact Info --><div class=contact-info><h3 class=main-heading><span>Name - Karthik Girraju<br><br></span></h3><ul style="list-style: none; margin-left: 0"><li>Phone: 9535965359</li><li>DOB: July 16, 1993</li><li>Email: <a style="color: #5cd25c" href="mailto:karthik.girraj@gmail.com?Subject=Hello%20again" target=_top>karthik.girraj@gmail.com</a></li><li>J.P.Nagar 6th phase, Bengaluru</li><li>Website: <a style="color: #5cd25c" href=http://www.karthikraj.co.nf target=_blank>www.karthikraj.co.nf</a></li><li>Languages Known : English, Hindi, Kannada and Telugu</li></ul></div></div><div class=clear></div>');
$templateCache.put('app/components/education.html','<h2 id=learn class=sectionHead>Education</h2><!--EDUCATION--><ul id=schools><li><div class=details><h3>Vellore Institute of Technology</h3><h4>M.S.S.E</h4><h5>2010 - 2015</h5></div><p>CGPA \u2013 7.51</p></li><li><div class=details><h3>Sri Chaitanya Institution, Tirupati, AP</h3><h4>Higher Secondary - PCM</h4><h5>2009 - 2010</h5></div><p>PERCENTAGE : 90.1%</p></li><li><div class=details><h3>PriyaDarshini VidyaMandir, AP</h3><h4>Primary - PCM</h4><h5>2008(Passout)</h5></div><p>PERCENTAGE : 80%</p></li></ul><!--end schooling--><div class=clear></div>');
$templateCache.put('app/components/experience.html','<h2 id=clock class=sectionHead>Experience</h2><!--EXPERIENCE--><ul id=jobs><li><div class=details><h3>Technical Lead Developer</h3><h3>Forever Networks Pvt Ltd</h3><h4>Location - Bengaluru</h4><h5>April 2016 - Ongoing</h5></div><p>Developed SASS based Educational Products*</p></li><li><div class=details><h3>Web Developer</h3><h3>Kanoe Softwares(P) Ltd</h3><h4>Location - Bengaluru</h4><h5>Jan 2015 - Mar 2015</h5></div><p>Developed a responsive website for the company using Bootstrap, PHP, HTML, CSS, JQuery, MySQL.</p></li></ul><!--end jobs--><div class=clear></div>');
$templateCache.put('app/components/honors_awards.html','<h2 id=ribbon class=sectionHead>Volunteer</h2><!--HONORS / AWARDS--><ul id=honorsAwards><li>Free & Open Source Community ( FOSS ) - Coordinator</li><li>Games Event Organiser</li></ul><!--end honorsAwards--><div class=clear></div>');
$templateCache.put('app/components/links.html','<style type=text/css>a.button {\r\n    text-decoration: none;\r\n    color: initial;\r\n  }</style><h2 id=eye class=sectionHead>Links</h2><h3 style="color: red"><strong>Note:</strong>These projects are not complete and just for reference purpose. These projects are just the left overs.</h3><ul id=seenOn><a href=http://classifieds-mvc.herokuapp.com target=_blank class=button>Laravel CRUD Application <strong>Register and Test it</strong><br><br></a><a href=http://anuragbackend.co.nf target=_blank class=button>AngularJs as FrontEnd & slimphp as Backend <strong>Username- qwe, Password- qwe</strong><br><br></a><a href=http://techtest.co.nf target=_blank class=button>Plain Bootstrap, Jquery with Freshdesk Integration for contact Form<br><br></a><a href=http://radhika.maayavr.xyz target=_blank class=button>Wordpress<br><br></a><a href=http://mmvweddings.com target=_blank class=button>Plain bootstrap, Jquery<br><br></a><a href=http://maayavr.xyz target=_blank class=button>Bootstrap<br><br></a></ul><!--end seenOn--><div class=clear></div>');
$templateCache.put('app/components/projects.html','<h2 id=chat class=sectionHead>Projects Undertaken</h2><!--RECOMMENDATIONS--><ul id=recommends><li><div class=details><h3>Subscription Module</h3><h4>AngularJs, Bootstrap, JavaScript, LESS, Gulp, Bower</h4></div><p>This module handles all the administrative tasks of the institute.<br><br></p></li><li><div class=details><h3>School Management System</h3><h4>AngularJs, Bootstrap, JavaScript, LESS, Gulp, Bower</h4></div><p>This module contains student, parent and teacher\u2019s sub-modules and has its own features.<br><br></p></li><li><div class=details><h3>Subscription Public Website</h3><h4>Bootstrap, JavaScript, Ajax, CSS</h4></div><p>This is a public website for subscription module with pricing, testimonials, product details etc.</p></li><li><div class=details><h3>School Public Website</h3><h4>WordPress CMS. Respond CMS</h4></div><p>Has experience in working with WordPress as a school public website.<br><br></p></li><li><div class=details><h3>Educatehub Module</h3><h4>AngularJs, Bootstrap, JavaScript, LESS, Gulp, Bower</h4></div><p>This module handles student assessment tasks - competitive tests, score statistics, question papers.<br><br></p></li><li><div class=details><h3>Techwitzs Company Website</h3><h4>Bootstrap, JavaScript, Ajax, SCSS, Gulp, Bower</h4></div><p>Created a responsive website for the company with Help Desk integration.<br><br></p></li></ul><!--end recommends--><div class=clear></div>');
$templateCache.put('app/components/projects_old.html','<h2 id=chat class=sectionHead>Academic Projects</h2><!--RECOMMENDATIONS--><ul id=recommends><li><div class=details><h3>Online Help Desk</h3><h4>PHP, MySQL, Bootstrap Framework, JavaScript, CSS</h4></div><p>Created a Q&A portal for college to post hostel, maintenance and canteen related problems.<br><br></p></li><li><div class=details><h3>Student Academic History</h3><h4>PHP, MySQL, Bootstrap Framework, JavaScript, CSS</h4></div><p>Created a website for students to check marks throughout their academic history.<br><br></p></li><li><div class=details><h3>Online Quiz</h3><h4>JDBC: ODBC Connection</h4></div><p>Implemented an Online Quiz system with time-lapse and display of result on completion.</p></li><li><div class=details><h3>Multimedia Database Management System</h3><h4>PHP, PhpMyAdmin, CSS, Blobs</h4></div><p>Implemented a website to store multimedia files and can be played using flash player.<br><br></p></li><li><div class=details><h3>Understanding of RSA Algorithm</h3><h4>Java, Cryptography</h4></div><p>Implemented an RSA encryption algorithm.<br><br></p></li><li><div class=details><h3>Face Recognition System</h3><h4>Bio-Metric Implementation in MATLAB</h4></div><p>Recognizing accuracy of a sample image taken with a template.<br><br></p></li><li><div class=details><h3>Text-To-Speech</h3><h4>Java, Android Application</h4></div><p>Developing an app to convert text into speech.<br><br></p></li><li><div class=details><h3>Cloud Computing</h3><h4>Openshift, GIT Repository</h4></div><p>Implementing websites in cloud and controlling with GIT repo.<br><br></p></li><li><div class=details><h3>Android ROM Development</h3><h4>Cygwin packages-XDA Dev Tools, LINUX</h4></div><p>Developing android custom operating system with improvements and lot of customizations.</p></li></ul><!--end recommends--><div class=clear></div>');
$templateCache.put('app/components/relevant_skills.html','<h2 id=titleName class=sectionHead>Relevent Experience</h2><div id=bio><ul><li><strong>PHP Framework</strong> : Slim PHP, Laravel Framework</li><li><strong>API Integration</strong> : REST API, JSON, XML</li><li><strong>Git</strong> : Github, Bitbucket, GitFlow</li><li><strong>Hybrid Mobile Apps:</strong> : Ionic Framework, Cordova Phonegap</li><li><strong>JIRA Atlassian</strong> : Software Development Tool used for issue and project tracking for teams.</li><li><strong>JIRA Confluence</strong> : Use-Cases and documentation for the products.</li><li><strong>Gulp</strong> : Build System Automate - minify, concatenate, building, watching.</li><li><strong>Bower</strong> : Package Management \u2013 install, update and remove web libraries.</li><li><strong>Testing</strong> : Gherkin Language, BDD \u2013 Behavior Driven Development Cases, Selenium web driver.</li><li><strong>NodeJs</strong> : Node package manager(npm) \u2013 ExpressJs</li><li><strong>3rd party Modules</strong> : angular Bootstrap, angular-ui-router, angular-ui-grid, Rest angular, angular cookies, angular animate, Font-awesome, JQuery.</li></ul></div><div class=clear></div>');
$templateCache.put('app/components/skills.html','<h2 id=tools class=sectionHead>Skills</h2><ul id=skills><li id=skill2 class=s90><span>AngularJs</span></li><li id=skill2 class=s80><span>PHP</span></li><li id=skill3 class=s90><span>HTML + CSS</span></li><li id=skill3 class=s80><span>JavaScript</span></li><li id=skill1 class=s80><span>WordPress Development</span></li><li id=skill3 class=s90><span>Bootstrap</span></li><li id=skill3 class=s90><span>MySQL</span></li><li id=skill3 class=s90><span>PostgreSQL</span></li><li id=skill4 class=s80><span>jQuery</span></li><li id=skill3 class=s70><span>Java</span></li><li id=skill3 class=s70><span>C</span></li><li id=skill3 class=s70><span>C++</span></li></ul><!--end skills--><script>$(\'ul#skills\').addClass("ready");\r\n  $(\'ul#skills li\').each(function () {\r\n    var i = $(this).index();\r\n    $(this).delay(100 * i).animate({right: "0%"}, 1000, function () {\r\n      $(this).children(\'span\').fadeIn(600);\r\n    });\r\n  });</script><div class=clear></div>');
$templateCache.put('app/main/main.html','<div ng-include="\'app/components/bio.html\'"></div><div ng-include="\'app/components/skills.html\'"></div><div ng-include="\'app/components/education.html\'"></div><div ng-include="\'app/components/experience.html\'"></div><div ng-include="\'app/components/projects.html\'"></div><div ng-include="\'app/components/links.html\'"></div><div ng-include="\'app/components/relevant_skills.html\'"></div><div ng-include="\'app/components/contact.html\'"></div><div ng-include="\'app/components/projects_old.html\'"></div>');}]);