let handler = async (m, { text, usedPrefix }) => {
let INTROJUEGO = `*π·πΎπ»π° ππ», π΄πππ°π πΉππΆπ°π½π³πΎ π° "πΏπΈπ΄π³ππ°, πΏπ°πΏπ΄π» πΎ ππΈπΉπ΄ππ°"*\n\n*πΎπΏπ²πΈπΎπ½π΄π π³πΈππΏπΎπ½πΈπ±π»π΄π:*\n*piedra, papel o tijera*\n\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix}ppt tijera*\n\n*- πππ΄ π»π°π πΎπΏπ²πΈπΎπ½π΄π π΄π½ πΌπΈπ½πππ²ππ»π°π π²πΎπΌπΎ ππ΄ πΈπ½π³πΈπ²π° π΄π½ π΄π» π΄πΉπ΄πΌπΏπ»πΎ*\n\n*ππΊβΟΞ»Ι΄ΙΞ΅Ι±Ξ―Ζ²Ι± - π±ππβ*`
if (!text) throw INTROJUEGO
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`*π° Empate!*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else {
throw INTROJUEGO
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
