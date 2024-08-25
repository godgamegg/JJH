// stores.js
import { writable } from 'svelte/store';
import { isExportDeclaration } from 'typescript';

// 초기 값은 0

//community

export const writetoggle = writable(0);


//callender
export const callender_inform_toggle = writable(0);
export const callender_inform_type = writable(0);


//user
export const user_inform_toggle = writable(0);


//chat

export const chatting_toggle = writable(0);


//alarm

export const alarm_toggle = writable(0);


//login

export const logined  = writable(0);

//writing_more
export const writing_more_toggle = writable(0);


//writing_comment

export const writing_comment_toggle = writable(0);
