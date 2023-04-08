import React from 'react'

function MessageBoxRight(props) {
  return (
    <div class="flex items-center justify-start flex-row-reverse">
        <div
            class="relative flex max-w-[25vw] mr-[10vw] text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
        >
            <div>{props.children}</div>
        </div>
    </div>
    )
}

export default MessageBoxRight