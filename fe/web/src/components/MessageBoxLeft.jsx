import React from 'react'

function MessageBoxLeft(props) {
  return (
    <div class="flex items-center justify-start flex-row">
            <div
                class="relative max-w-[25vw] ml-[10vw] text-sm bg-white py-2 px-4 shadow rounded-xl">
            <div>
                {props.children}
            </div>
        </div>
    </div>
    )
}

export default MessageBoxLeft