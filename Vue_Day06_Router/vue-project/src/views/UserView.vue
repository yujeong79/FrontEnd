<template>
    <div>
        <h2>UserView</h2>
        <p>{{ $route.params.id }}</p> <!-- 비권장 -->
        <p>{{ userId }}</p> <!-- 권장, 다만 parameter인 id만 바꿀 경우 component를 새로 불러오지 않기 때문에 parameter의 실시간 변경 처리를 해줄 필요가 있음 -->
        <p>{{ userId2 }}</p>

        <hr>
        <button @click="goHome">홈으로</button>

    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';
    import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

    const route = useRoute(); // script에서는 $route를 사용할 수 없으므로 route를 사용하기 위한 등록을 해주는 것
    const router = useRouter(); 

    const userId = ref(route.params.id);
    const userId2 = ref(route.params.id);

    // watch(감시하는 변수, 콜백함수)
    watch(()=>route.params.id, (newId)=>{
        userId.value = newId;
    });

    function goHome() {
        // push, 뒤로 가기 가능
        // 직접 URL 경로를 작성할 수 있음
        // router를 사용하기 위해 위에 useRouter()를 했음
        router.push('/')

        // 이름으로 호출도 가능~
        router.push({name: 'about'});

        // replace, 뒤로 가기 불가능
        router.replace({name: 'home'});
    }

    onBeforeRouteLeave(()=>{
        const answer = confirm("정말로 떠나실 건가요?")
        console.log(answer); // confirm 확인을 누르면 true, 취소를 누르면 false

        if(!answer) return false;
    });

    onBeforeRouteUpdate((to)=>{
        userId2.value = to.params.id;
    });

</script>

<style scoped>

</style>