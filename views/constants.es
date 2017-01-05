// ship types dated 20170106, beginning with id=1
// const shipTypes = ["海防艦", "駆逐艦", "軽巡洋艦", "重雷装巡洋艦", 
// "重巡洋艦", "航空巡洋艦", "軽空母", "戦艦", "戦艦", "航空戦艦", "正規空母", 
// "超弩級戦艦", "潜水艦", "潜水空母", "補給艦", "水上機母艦", "揚陸艦", "装甲空母", 
// "工作艦", "潜水母艦", "練習巡洋艦", "補給艦"]
// attention, typeMap uses api_id
export const typeMap = {
  DD: [2],
  CL: [3, 4, 21],
  CA: [5, 6],
  BB: [8, 10, 12],
  CV: [7, 11, 18],
  SS: [13, 14],
  others: [1, 9, 15, 16, 17, 19, 20, 22],
}

export const shipTypeMap = [
  {
    "name": "DD",
    "id": [2],
  },
  {
    "name": "CL",
    "id": [3, 4, 21],
  },
  {
    "name": "CA",
    "id": [5, 6],
  },
  {
    "name": "BB",
    "id": [8, 10, 12],
  },
  {
    "name": "CV",
    "id": [7, 11, 18],
  },
  {
    "name": "SS",
    "id": [13, 14],
  },
  {
    "name": "others",
    "id": [1, 9, 15, 16, 17, 19, 20, 22],
  },
]

export const lvOptions = {
  [0]: 'All',
  [1]: 'Lv.1',
  [2]: 'Above Lv.2',
}

export const lockedOptions = {
  [0]: 'All',
  [1]: 'Locked',
  [2]: 'Not Locked',
}

export const expeditionOptions = {
  [0]: 'All',
  [1]: 'In Expedition',
  [2]: 'Not In Expedition',  
}

export const modernizationOptions = {
  [0]: 'All',
  [1]: 'Modernization Completed',
  [2]: 'Modernization Incompleted',
}

export const remodelOptions = {
  [0]: 'All',
  [1]: 'Not Remodelable',
  [2]: 'Remodelable',
}
