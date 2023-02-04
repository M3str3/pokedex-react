export function formatName(name: string): string {
    if(name.includes("♀")){
        return name.replace("♀","-f")
    }else if (name.includes("♂")){
        return name.replace("♂","-m")
    }else if (name.includes("farfetch'd")){
        return "farfetchd"
    }else if (name.includes(". ")){
        return name.replace(". ","-")
    }
    return name
}