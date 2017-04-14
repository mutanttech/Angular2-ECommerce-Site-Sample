import { Component, Input } from '@angular/core';

@Component({
selector:'loader',
template:`
<style type="text/css">
#loadFacebookG{
	width:38px;
	height: 38px;
	display: block;
	position: relative;
	margin:auto;
}

.facebook_blockG{
    background-color:rgba(0,0,0,0.97);
	border:1px solid rgb(0,0,0);
	float:left;
	height:27px;
	margin-left:2px;
	width:7px;
	opacity:0.1;
	animation-name:bounceG;
		-o-animation-name:bounceG;
		-ms-animation-name:bounceG;
		-webkit-animation-name:bounceG;
		-moz-animation-name:bounceG;
	animation-duration:0.975s;
		-o-animation-duration:0.975s;
		-ms-animation-duration:0.975s;
		-webkit-animation-duration:0.975s;
		-moz-animation-duration:0.975s;
	animation-iteration-count:infinite;
		-o-animation-iteration-count:infinite;
		-ms-animation-iteration-count:infinite;
		-webkit-animation-iteration-count:infinite;
		-moz-animation-iteration-count:infinite;
	animation-direction:normal;
		-o-animation-direction:normal;
		-ms-animation-direction:normal;
		-webkit-animation-direction:normal;
		-moz-animation-direction:normal;
	transform:scale(0.7);
		-o-transform:scale(0.7);
		-ms-transform:scale(0.7);
		-webkit-transform:scale(0.7);
		-moz-transform:scale(0.7);
}

#blockG_1{
	animation-delay:0.2895s;
		-o-animation-delay:0.2895s;
		-ms-animation-delay:0.2895s;
		-webkit-animation-delay:0.2895s;
		-moz-animation-delay:0.2895s;
}

#blockG_2{
	animation-delay:0.386s;
		-o-animation-delay:0.386s;
		-ms-animation-delay:0.386s;
		-webkit-animation-delay:0.386s;
		-moz-animation-delay:0.386s;
}

#blockG_3{
	animation-delay:0.4825s;
		-o-animation-delay:0.4825s;
		-ms-animation-delay:0.4825s;
		-webkit-animation-delay:0.4825s;
		-moz-animation-delay:0.4825s;
}



@keyframes bounceG{
	0%{
		transform:scale(1.2);
		opacity:1;
	}

	100%{
		transform:scale(0.7);
		opacity:0.1;
	}
}

@-o-keyframes bounceG{
	0%{
		-o-transform:scale(1.2);
		opacity:1;
	}

	100%{
		-o-transform:scale(0.7);
		opacity:0.1;
	}
}

@-ms-keyframes bounceG{
	0%{
		-ms-transform:scale(1.2);
		opacity:1;
	}

	100%{
		-ms-transform:scale(0.7);
		opacity:0.1;
	}
}

@-webkit-keyframes bounceG{
	0%{
		-webkit-transform:scale(1.2);
		opacity:1;
	}

	100%{
		-webkit-transform:scale(0.7);
		opacity:0.1;
	}
}

@-moz-keyframes bounceG{
	0%{
		-moz-transform:scale(1.2);
		opacity:1;
	}

	100%{
		-moz-transform:scale(0.7);
		opacity:0.1;
	}
}
</style>
<div>
<div [style.display]="displayLoading ? 'inherit' : 'none'"  id="loadFacebookG">
	<div id="blockG_1" class="facebook_blockG"></div>
	<div id="blockG_2" class="facebook_blockG"></div>
	<div id="blockG_3" class="facebook_blockG"></div>
</div>
`
}) 
export class LoaderComponent {
@Input() displayLoading : boolean;
constructor(){}
}