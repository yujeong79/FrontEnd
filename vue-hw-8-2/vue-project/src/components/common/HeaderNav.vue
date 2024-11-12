<template>
  <div>
    <header>
      <h2>사용자 관리</h2>

      <nav>
        <router-link :to="{name: 'UserCreate'}">사용자 등록</router-link>
        <router-link :to="{name: 'UserList'}">사용자 목록</router-link>
      </nav>
    </header>

    <router-view/>
  </div>
</template>

<script setup></script>

<style>
  header {
    display: flex;
    color: white;
    background-color: orange;
  }
</style>
