<template>
	<div class="row my-3">
		<div class="col-md-10">
			<article class="shadow p-0">
				<img :src="member.src" class="img-fluid" alt="team_member" />
				<div class="team-content p-3">
					<h3>{{member.name}}</h3>
					<p>{{member.description}}</p>
					<a class="btn btn-team" href>Read more</a>
				</div>
				<div class="team-social-links p-2">
					<a href="#">
						<i class="fab fa-facebook px-2"></i>
					</a>
					<a href="#">
						<i class="fab fa-instagram px-2"></i>
					</a>
					<a href="#">
						<i class="fab fa-twitter px-2"></i>
					</a>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
export default {
	name: "member",
	props: ["member"],
};
</script>

<style lang="css" scoped>
</style>