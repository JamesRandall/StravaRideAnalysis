function getMonday(d) {
  d = new Date(d)
  var day = d.getDay(),
      diff = d.getDate() - day + (day === 0 ? -6:1) // adjust when day is sunday
  const result = new Date(d.setDate(diff))
  result.setHours(0,0,0,0)
  return result
}

export default function receiveActivities(state, action) {
    let result 
            
    if (action.replace) {
        result = { ...state, summaries: action.activities }
    }
    else {
        result = { ...state, summaries: [...state.summaries, ...action.activities] }
    }

    const effectiveDate = action.isDemoData ? new Date(2016, 11, 15, 16, 0, 0, 0) : new Date()

    const year = effectiveDate.getFullYear()
    let monthDistances = [0,0,0,0,0,0,0,0,0,0,0,0]
    const lastMondayStart = getMonday(effectiveDate)
    let dayDistances = [0,0,0,0,0,0,0]
    result.summaries.forEach(function(activity) {
        if (activity.startDate >= lastMondayStart) {
            dayDistances[activity.startDate.getDay()] += activity.distance
        }
        if (activity.startDate.getFullYear() === year) {
            monthDistances[activity.startDate.getMonth()] += activity.distance
        }
    });

    result = {...result, 
        weeklySummary: {
            monday: dayDistances[1],
            tuesday: dayDistances[2],
            wednesday: dayDistances[3],
            thursday: dayDistances[4],
            friday: dayDistances[5],
            saturday: dayDistances[6],
            sunday: dayDistances[0]
        },
        monthlySummary: {
            january: monthDistances[0],
            february: monthDistances[1],
            march: monthDistances[2],
            april: monthDistances[3],
            may: monthDistances[4],
            june: monthDistances[5],
            july: monthDistances[6],
            august: monthDistances[7],
            september: monthDistances[8],
            october: monthDistances[9],
            november: monthDistances[10],
            december: monthDistances[11]
        }
    }

    return result
}