var lightYears = [0, 0, 0, 0, 3, 3, 4, 5, 9, 10, 16, 30, 37, 44, 56, 63, 72, 82, 93, 113, 129, 138, 155, 167, 190, 199, 223, 248, 278, 301, 322, 338, 359, 392, 413, 438, 475, 514, 539, 568, 605, 647, 697, 728, 766, 811, 868, 911, 962, 1003, 1059, 1118, 1167, 1227, 1293, 1335, 1394, 1463, 1517, 1565, 1639, 1695, 1749, 1800, 1865, 1944, 2011, 2060, 2134, 2216, 2298, 2360, 2450, 2501, 2561, 2637, 2688, 2777, 2828, 2914, 2956, 3032, 3091, 3196, 3244, 3302, 3358, 3424, 3472, 3533, 3586, 3633, 3699, 3755, 3807, 3856, 3912, 3981, 4032, 4108, 4111]

var age = $('#age').text();

$('#lifeStarRange').text(lightYears[parseInt($('#age').text())] + " stars")