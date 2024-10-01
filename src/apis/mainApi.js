export const fetchTeamSpaces = (page, itemsPerPage) => {
    // TeamSpace 데이터 예시
    const allTeamSpaces = [
        { title: "스페이스제목1", leader: "스페이스 리더1", description: "스페이스 설명1" },
        { title: "스페이스제목2", leader: "스페이스 리더2", description: "스페이스 설명2" },
        { title: "스페이스제목3", leader: "스페이스 리더3", description: "스페이스 설명3" },
        { title: "스페이스제목4", leader: "스페이스 리더4", description: "스페이스 설명4" },
        { title: "스페이스제목5", leader: "스페이스 리더5", description: "스페이스 설명5" },
        { title: "스페이스제목6", leader: "스페이스 리더6", description: "스페이스 설명6" },
        { title: "스페이스제목6", leader: "스페이스 리더6", description: "스페이스 설명6" },




    ];

    // 페이징 계산
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return {
        data: allTeamSpaces.slice(startIndex, endIndex), // 페이지에 해당하는 데이터만 자르기
        totalPages: Math.ceil(allTeamSpaces.length / itemsPerPage), // 총 페이지 수 계산
    };
};
