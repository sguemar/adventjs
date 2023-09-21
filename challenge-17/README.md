# The madness of sending parcels this season

Parcel companies 📦 are preparing for the festive season and the madness of deliveries that awaits them.

The company operates fleets of vans 🚛 and trucks 🚚. The fleets have an organization chart, as there are experience level ranges.

We need to know the number of parcels a person will be able to handle in a day. This is done by counting the number of parcels that person can carry and **all the carriers he has in his team**. The problem is that the data is stored in a rather strange way in an array:

- The array contains other arrays that contain the data for each carrier
- `carrier[0]` -> Name/ID of the carrier
- `carrier[1]` -> Packets handled in a day
- `carrier[2]` -> Array with his subordinates

To see it in code, both the array and the two-parameter function to get the desired number:

```JavaScript
const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 of dapelu, 2 of midu and 2 of jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
// 5 of camila, 4 of sergiomartinez, 3 of conchaasensio, 2 of facundocapua and 1 of faviola = 15
```

**Be careful!** As you have seen in the second example, **the flowchart can have different levels and we also get information that we may not need**. We must take into account the `carrierID` parameter to calculate the number correctly and count all his team.