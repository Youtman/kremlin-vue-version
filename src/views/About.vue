<template>
	<div class="about">
		<div class="container mt-5">
			<section class="members">
				<Member v-for="member in members" :key="member.name" :member="member" />
			</section>
		</div>
	</div>
</template>
<script>
import Member from "@/components/Member.vue";
import "@/assets/css/bootstrap.min.css";

export default {
	components: {
		Member,
	},
	data() {
		return {
			members: [
				{
					name: "Rebekah Krem",
					description:
						"Laboriosam deleniti nulla illum ex, ratione repellat ipsum praesentium fugit ea nesciunt quasi nihil magnam impedit labore.",
					src: require("@/assets/img/team1.png"),
				},
				{
					name: "Lincoln Obach",
					description:
						"Laboriosam deleniti nulla illum ex, ratione repellat ipsum praesentium fugit ea nesciunt quasi nihil magnam impedit labore.",
					src: require("@/assets/img/team2.png"),
				},
				{
					name: "Mary Waceke",
					description:
						"Laboriosam deleniti nulla illum ex, ratione repellat ipsum praesentium fugit ea nesciunt quasi nihil magnam impedit labore.",
					src: require("@/assets/img/team3.png"),
				},
			],
		};
	},
};
</script>
<style lang="css">
.members {
	width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>