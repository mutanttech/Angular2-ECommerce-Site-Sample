import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<!-- Navigation -->
	<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button class="navbar-toggle" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" type="button"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#"></a>
			</div><!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
                  </ul>
				<cart></cart>
			</div><!-- /.navbar-collapse -->
		</div><!-- /.container -->
	</nav><!-- Page Content -->
	<div class="container">
		<div class="row">
			<div class="col-md-3">
				<p class="lead">Shopper's Stop</p>
			    <productcategory></productcategory>
			</div>
			<div class="col-md-9">
				<div class="row">
                    <router-outlet></router-outlet>
                </div>
			</div>
		</div>
	</div><!-- /.container -->
	<div class="container">
		<hr>
		<!-- Footer -->
		<footer>
			<div class="row">
				<div class="col-lg-12">
					<p>Copyright &copy; Shopper's Stop 2017-2020</p>
				</div>
			</div>
		</footer>
	</div><!-- /.container -->
  `,

})
export class AppComponent {
    constructor() { }
}
