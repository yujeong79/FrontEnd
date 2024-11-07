<template>
    <div>
        <h4>자식 컴포넌트</h4>
        <p>{{ myMsg }}</p>
        <p>{{ dynamicName }}</p>
        <!-- <ParentGrandChild my-msg="myMsg"/> 이렇게 하면 my-msg라는 prop 이름으로 "myMsg" 문자열 그대로가 전달 -->
        <ParentGrandChild v-bind:my-msg="myMsg" @update-name="updateName"/> <!-- 이렇게 v-bind 해주면 my-msg로 setup에서 선언된 myMsg가 전달 -->
        
        <hr>
        <p>1. $emit inline 사용</p>
        <button @click="$emit('someEvent')">부모전송(inline)</button> <!-- 버튼을 클릭하면 부모한테 someEvent 요청을 보냄 -->
        <p>2. $emit 메서드 만들어서 사용</p>
        <button @click="buttonClick">부모전송(method)</button>
        <p>3. emit 인자 전달</p>
        <button @click="emitArgs">추가인자전달</button> <!-- 여기서는 호출할 메서드를 입력하고 -->
    </div>
</template>

<script setup>

    // 부모로부터 받은 props를 사용하기 위한 방법은 2가지
    // 1. defineProps()를 사용
    // defindProps(['myMsg']);

    // 2. 객체를 사용한 선언(권장 방법)
    const props = defineProps({
        myMsg: String,
        dynamicName: String,
    });

    console.log(props.myMsg);
    
    // script에서는 $emit를 사용할 수 없으므로 
    // defineEmits를 통해 사용할 사용자 정의 이벤트를 등록?
    const emit = defineEmits(['someEvent', 'emitArgsMethod', 'updateName']);  // 미리 defineEmits를 통해 이벤트를 등록해주었다.
    
    const buttonClick = function() {
        emit('someEvent')
    };
    
    const emitArgs = function() { // click 이벤트 발생하면 메서드가 호출되는데
        emit('emitArgsMethod', 1, 2, 3) // 이때 emit하고 사용자 정의 이벤트를 넘겨주고 그 사용자 정의 이벤트는
    };

    const updateName = function(name) {
        emit('updateName', name);
    }

    import ParentGrandChild from './ParentGrandChild.vue';

</script>

<style scoped>

</style>