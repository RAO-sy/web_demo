<template>	
	<div class="container_example">
		<div class="card">
		  <header class="card-header">
		    <p class="card-header-title">Human Written</p>
		    <button class="card-header-icon" aria-label="more options">
		      <span class="icon">
		        <i class="fas fa-angle-down" aria-hidden="true"></i>
		      </span>
		    </button>
		  </header>
		  <div class="card-content">
		    <div class="content" style="text-align: justify;">
		      Maj Richard Scott, 40, is accused of driving at speeds of up to 95mph (153km/h) 
			  in bad weather before the smash on a B-road in Wiltshire. Gareth Hicks, 24,
			  suffered fatal injuries when the van he was asleep in was hit by Mr Scott's Audi 
			  A6. Maj Scott denies a charge of causing death by careless driving. Prosecutor
			  Charles Gabb alleged the defendant, from Green Lane in Shepperton, Surrey,
			  had crossed the carriageway of the 60mph-limit B390 in Shrewton near Amesbury.
			  The weather was "awful" and there was strong wind and rain, he told jurors. 
			  He said Mr Scott's car was described as "twitching" and "may have been aquaplaning" before striking the first vehicle;
			  a BMW driven by Craig Reed. Mr Scott's Audi then returned to his side of the road but crossed the carriageway 
			  again before colliding head-on with a Ford Transit van in which Mr Hicks was a passenger, the court was told. 
		    </div>
		  </div>
		  <footer class="card-footer">
		    <p class="result">detection result: <b-tag type="is-success is-light">17%</b-tag> AI generated</p>
		  </footer>
		</div>
		
		<div class="card">
		  <header class="card-header">
		    <p class="card-header-title">GPT-3.5-Turbo Generation</p>
		    <button class="card-header-icon" aria-label="more options">
		      <span class="icon">
		        <i class="fas fa-angle-down" aria-hidden="true"></i>
		      </span>
		    </button>
		  </header>
		  <div class="card-content">
		    <div class="content" style="text-align: justify;">
		      Maj Richard Scott, 40, is accused of driving at speeds of up to 95mph (153km/h) 
			  in bad weather before the fatal crash that claimed the lives of two young children. 
			  The incident occurred on the A34 motorway near Newbury, Berkshire, last Saturday. 
			  Eyewitnesses reported seeing Maj Scott's car weaving in and out of traffic before losing 
			  control and colliding with another vehicle. The impact caused both cars to veer off the road 
			  and crash into a nearby tree. Tragically, the two children, aged 3 and 5, 
			  who were passengers in the other vehicle, were pronounced dead at the scene. 
			  The driver of that car, a 32-year-old woman, sustained serious injuries and is currently in 
			  critical condition at a local hospital. Maj Scott, a decorated military officer, 
			  has been charged with dangerous driving causing death and grievous bodily harm. 
			  He appeared before the magistrates' court earlier today and was released on bail. 
			  The incident has sparked a debate regarding the responsibility of drivers, especially 
			  those in high-stress professions, to ensure the safety of others on the road.
		    </div>
		  </div>
		  <footer class="card-footer">
		    <p class="result">detection result: <b-tag type="is-danger is-light">100%</b-tag> AI generated</p>
		  </footer>
		</div>
		
		<div class="card">
		  <header class="card-header">
		    <p class="card-header-title">GPT-4 Generation</p>
		    <button class="card-header-icon" aria-label="more options">
		      <span class="icon">
		        <i class="fas fa-angle-down" aria-hidden="true"></i>
		      </span>
		    </button>
		  </header>
		  <div class="card-content">
		    <div class="content" style="text-align: justify;">
		      Maj Richard Scott, 40, is accused of driving at speeds of up to 95mph 
			  (153km/h) in bad weather before the shocking accident that resulted in severe 
			  injuries to a pedestrian late last Tuesday. The incident occurred along a notorious 
			  stretch of the M4 highway, renowned for treacherous conditions during heavy rainfall. 
			  Police reports suggest that Scott, a decorated military officer, lost control of his 
			  vehicle due to excessive speed and poor visibility, striking a 52-year-old man 
			  who was immediately rushed to the hospital in critical condition. 
			  The Major now faces potential charges of reckless driving and causing serious bodily 
			  harm. He was released on bail awaiting a court hearing. 
			  The accident has prompted local authorities to reconsider safety measures 
			  on the M4, including the possibility of lowering speed limits during inclement weather. 
			  This tragic accident serves as a stark reminder of the vital importance of road safety, 
			  particularly in adverse weather conditions.
		    </div>
		  </div>
		  <footer class="card-footer">
		    <p class="result">detection result: <b-tag type="is-warning is-light">47%</b-tag> AI generated</p>
		  </footer>
		</div>
	</div>
</template>

<script>
</script>

<style>
.container_example{
	padding-top: 40px;
	width: 930px;
	display: block;
	margin: auto;
}
.result{
	height: 30px;
	font-size: 17px;
	margin:5px;
	margin-left:16px;
}
.card{
	margin-bottom: 30px;
}
</style>