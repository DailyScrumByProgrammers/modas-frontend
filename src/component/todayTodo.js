import { useState, EventHandler, ReactNode } from 'react'

const todayTodo = () => {
    return (<div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[81px] top-[622px] w-[543px] h-[302px] border-[3px] border-solid border-[#fbbf24] rounded-[30px]"></div>
        <div className="absolute left-[122px] top-[699px] w-[434px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start pt-[8px] pr-[56px] pb-[8px] pl-[12px] bg-[#fff] border-[1px] border-solid border-[#cbd5e1] rounded-[6px]">
                        <div className="text-[14px] leading-[20px] font-['Inter'] text-[#0f172a] whitespace-nowrap">오늘 작성한 투두 내용</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute left-[122px] top-[745px] w-[434px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start pt-[8px] pr-[56px] pb-[8px] pl-[12px] bg-[#fff] border-[1px] border-solid border-[#cbd5e1] rounded-[6px]">
                        <div className="text-[14px] leading-[20px] font-['Inter'] text-[#0f172a] whitespace-nowrap">@radix-ui/primitives</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute left-[121px] top-[793px] w-[434px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start pt-[8px] pr-[56px] pb-[8px] pl-[12px] bg-[#fff] border-[1px] border-solid border-[#cbd5e1] rounded-[6px]">
                        <div className="text-[14px] leading-[20px] font-['Inter'] text-[#0f172a] whitespace-nowrap">@radix-ui/primitives</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute left-[121px] top-[836px] w-[434px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start pt-[8px] pr-[56px] pb-[8px] pl-[12px] bg-[#fff] border-[1px] border-solid border-[#cbd5e1] rounded-[6px]">
                        <div className="text-[14px] leading-[20px] font-['Inter'] text-[#0f172a] whitespace-nowrap">+ 투두추가하기</div>
                    </div>
                </div>
            </div>
        </div>
        <img className="absolute left-[566px] top-[658px]" width="24" height="24" src="saving"></img>
    </div>)
}

export default todayTodo