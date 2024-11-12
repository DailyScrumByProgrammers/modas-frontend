import { useState, EventHandler, ReactNode } from 'react'

const yesterdayTodo = () => {
    return (<div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[81px] top-[279px] w-[543px] h-[302px] border-[3px] border-solid border-[#fbbf24] rounded-[30px]"></div>
        <div className="absolute left-[96px] top-[335px] w-[377px] h-[41px] text-[17px] font-['Noto_Sans_KR'] text-[#000]">전날 작성한 투두 내용</div>
        <img className="absolute left-[423px] top-[339px]" width="24" height="24" src="icon-check61_362.png"></img>
        <img className="absolute left-[423px] top-[378px]" width="24" height="24" src="icon-check61_363.png"></img>
        <div className="absolute left-[112px] top-[525px] w-[110px] h-[41px] text-[24px] font-['Noto_Sans_KR'] text-[#000] text-center">한 줄 회고</div>
        <div className="absolute left-[499px] top-[442px] w-[110px] h-[41px] text-[20px] font-['Noto_Sans_KR'] text-[#000] text-center">달성률</div>
        <div className="absolute left-[213px] top-[525px] w-[110px] h-[41px] text-[24px] font-['Noto_Sans_KR'] text-[#828282] text-center">입력란</div>
        <div className="absolute left-[96px] top-[376px] w-[377px] h-[41px] text-[17px] font-['Noto_Sans_KR'] text-decoration-[line-through] text-[#000]">전날 작성한 투두 내용</div>
        <div className="absolute left-[96px] top-[417px] w-[377px] h-[41px] text-[17px] font-['Noto_Sans_KR'] text-[#000]">전날 작성한 투두 내용</div>
        <div className="absolute left-[96px] top-[458px] w-[377px] h-[41px] text-[17px] font-['Noto_Sans_KR'] text-[#000]">전날 작성한 투두 내용</div>
        <div className="absolute left-[511px] top-[347px] w-[86px] h-[86px] border-[1px] border-solid border-[#000] rounded-full"></div>
        <img className="absolute left-[461px] top-[339px]" width="24" height="24" src="icon-x61_375.png"></img>
        <img className="absolute left-[423px] top-[418px]" width="24" height="24" src="icon-check61_376.png"></img>
        <img className="absolute left-[461px] top-[418px]" width="24" height="24" src="icon-x61_377.png"></img>
        <img className="absolute left-[423px] top-[460px]" width="24" height="24" src="icon-check61_378.png"></img>
        <img className="absolute left-[461px] top-[460px]" width="24" height="24" src="icon-x61_379.png"></img>
        <img className="absolute left-[461px] top-[378px]" width="24" height="24" src="icon-x61_380.png"></img>
        <div className="absolute left-[227px] top-[560px] w-[365px] h-0 border-[1px] border-solid border-[#000]"></div>
        <div className="absolute left-[518px] top-[368px] w-[72px] h-[43px] text-[28px] font-['Noto_Sans_KR'] font-black text-[#000] text-center">88%</div>
        <img className="absolute left-[461px] top-[302px]" width="24" height="24" src="icon/rotate-cw61_395.png"></img>
    </div>)
}

export default yesterdayTodo;