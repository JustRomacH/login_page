// These lists were scrapped using python

const red_colors = ["#CE7F75","#C75F4E","#AE5459","#C15950","#B7484F","#E4665C","#C84B45","#DA413D","#E74D3A","#E34132","#DC443A","#BA4653","#E46A6D","#D66467","#EA636B","#CB3145","#ED5656","#D6394B","#DB3844","#C14A64","#D73E5A","#E63E62","#D3305D","#B44E3D","#80505D","#7D4D55","#9D4844","#BF5346","#933D3A","#BD4538","#AC554E","#994541","#93302C","#B93A3E","#B82928","#D5392C","#824D5C","#854B5B","#BA6364","#AC5D5E","#994758","#B04E5D","#AF5263","#B55868","#A53E4B","#AF4249","#DC5D61","#DA4A52","#BF384A","#BC2A3A","#A22E37","#CD2A3E","#C3374D","#CE2B37","#BE2239","#D12631","#8F495F","#B63157","#D72D5C","#E44165","#DC3359","#B61745","#B5123F","#D53547","#C81D31","#C52242","#C21E56","#C51554","#BE185A","#812F4F","#5D303A","#853E4A","#8C3D45","#9B2335","#653B47","#58333E","#77353D","#7D303D","#943543","#852839","#B8283D","#BC243C","#672E3B","#6A323F","#A33546","#B52C45","#AD1236","#AD1C42","#B81B36","#B02541","#98364A","#9A2D4E","#A1224A","#98243A","#7D3443","#7A2F40","#9F1F4C","#743146","#7E314D","#7F2A49","#862C4D", "#9D3158"];
const green_colors = ["#E8EACE","#EFEFD0","#D5DFC5","#D9E2CE","#D8E9CD","#B3EAAF","#D5D5B8","#DDECC0","#CCDDB4","#D6DFB4","#C2D4B2","#CADFA1","#D4CEA5","#D3D78E","#CCD97A","#EAEDA6","#E2E3A7","#E0E09C","#E3ECA6","#E7E88D","#E7E8C8","#D5D09C","#DBD590","#E2EE83","#BFEADA","#BCE7D6","#C2D2BF","#C0D2B2","#B4D7B2","#A0DDAD","#C2CDB5","#C7D1B5","#C2D5A5","#B6EBA0","#AEDB9F","#C6D499","#D4E29B","#BFD58E","#B6D284","#B5CF61","#CED094","#D2D78B","#C7CD75","#CBEC7D","#CBD862","#BFD833","#D0D3B4","#D8D37D","#D5DB5C","#D3D70D","#9FDBCE","#98E2CF","#7ED9C3","#88DDBF","#B0D0BE","#A9D1BD","#CFD8C7","#C0D8BE","#BFDCCB","#ACE1CE","#C6CFC1","#BED0BE","#B5CCB8","#A8D0B9","#B7C9B0","#B3C3A2","#B3C89E","#AACA97","#9EC88D","#89C28A","#78D77C","#B7BE98","#BECBA0","#B4BD86","#A5C780","#A5CA77","#A4C964","#BABB96","#C1C186","#B7BD6B","#B0BC4A","#B9D146","#A1C42C","#CBC9A4","#D3C54D","#A8C4BC","#7CC5B4","#56CBB3","#5AD0BA","#ADC3B7","#ADC6B7","#8FC9B8","#76C1B1","#7DCFB6","#6ED1B4","#33C3A6","#B8C3B5","#B1CBBA","#9BC2AC","#81BEA1","#A7C2AC","#9FC39D","#8DBE93","#7EB181","#7BB381","#73B881","#6DD7A2","#6BD38C","#71CC51","#A4B279","#A2B06D","#93AB5A","#8FB34C","#91B54D","#B7AD88","#B0B583","#B1AF7C","#A5AC68","#C4BE6F","#B1B258","#ACB350","#BAB83A","#81CC45","#B5AB23","#B6B174","#BAB160","#BEAD3B","#C7B533","#55B4B0","#6CC0BA","#48C1AA","#00BCA1","#00B5A1","#41B4A6","#45B8AC","#00A35B","#A1B5A7","#7DBBA4","#47C6A3","#00B992","#9BC4AF","#61C2A2","#97C3A2","#7EB58C","#61BD93","#ADB69C","#A9BA9D","#A5BEA4","#90B289","#A2C49B","#7DB386","#40C575","#A2B292","#8EAD7C","#80A867","#74A56A","#7BB665","#7BB661","#A3AC99","#8CA571","#9A9D85","#849D7A","#7B9669","#749862","#9DB73D","#6D9654","#7BAE57","#759F4F","#8F916B","#999E62","#9DAA4A","#8E9C4B","#939063","#9C9C53","#A3A347","#A4A186","#9D8F51","#A89A51","#71A59C","#6DA2A1","#64A1A1","#4C9C95","#8DA099","#5DA19A","#4BA09B","#00A086","#2AA79E","#00B29B","#00AF95","#00A989","#649388","#00A68C","#3D9F88","#84958D","#7E8F82","#889C8F","#7B8F7E","#719D8A","#56A081","#33AD8A","#83A393","#679884","#72A28B","#52A182","#31A575","#00A176","#00AB78","#00AC78","#64BA92","#719273","#409C6A","#199D5C","#829F82","#1FB566","#7AA079","#70A072","#6D9E6B","#55AA59","#32B141","#49B960","#7D876E","#6C8E68","#649266","#638E4E","#4B8740","#738C72","#7D9A74","#708C66","#668D4E","#709350","#819261","#7E874B","#7B9344","#858A62","#8A8853","#867C4A","#917D42","#9F7F41","#846D3D","#008684","#008C8A","#768984","#668484","#638E8B","#318284","#339392","#009698","#00958A","#009483","#009F8E","#158B83","#008775","#497D76","#00806C","#009576","#00A37F","#009874","#3F8070","#008569","#00926A","#587762","#428065","#009D75","#00A571","#5C6D61","#00874F","#009246","#878F83","#697C6A","#528567","#4A8556","#698C69","#6E866F","#51814F","#566B43","#5F845B","#58714D","#52703F","#547453","#4B6F44","#52713F","#4E6E38","#596236","#676B57","#666F58","#525F49","#525B41","#767B50","#626C3B","#707C43","#5C634F","#6D7356","#696B4D","#666339","#6B7139","#7E8256","#706F48","#7F8040","#746E46","#65562A","#786E4A","#7F7252","#675E45","#716441","#7B6743","#7B6536","#008B87","#007173","#00736C","#4A6B6C","#3B6E6E","#277473","#00817E","#486E69","#265C59","#005F57","#007257","#4F6B67","#2B6963","#007163","#53655E","#517470","#315D54","#387470","#006B64","#23736B","#397262","#50816D","#007560","#007E5E","#009069","#42655B","#176054","#008563","#334E45","#516A5D","#3B715B","#358961","#1C734B","#4F6D5A","#5A7B63","#436F4D","#3F7045","#485C37","#515A4E","#595F53","#405241","#505941","#42453B","#383F36","#354230","#444C38","#363C31","#544B32","#645B40","#416061","#344746","#006465","#364747","#0C5E5C","#006162","#204544","#2C504A","#38524C","#2D5C5A","#1C4746","#155D4F","#355749","#335045","#40524E","#2A4239","#374F46","#236952","#37413B", "#2C4C32"];
const blue_colors = ["#8F9BB8","#8A9CC4","#8297CE","#879BAF","#869BAD","#819ABD","#759ACD","#708FB5","#7392CF","#638CC7","#849BA6","#819EA8","#7DA1BF","#669EC2","#6CA0DC","#52A3D6","#8A9C9C","#8A9EA1","#73809B","#7683A0","#6D7D9B","#8691B7","#6E80A4","#6F7A9F","#61769D","#747CA8","#697FC2","#6386BF","#667B98","#6887A0","#778FA8","#577C97","#5677A6","#5D89BA","#5A7CC2","#5388CD","#738A98","#578CA9","#3D81AC","#458AC6","#0083C1","#5F8D9F","#3388A6","#008BC3","#678A93","#357B91","#1B85A8","#008CB7","#008AC2","#0092CA","#0089B7","#0095C6","#447B8C","#128191","#00859C","#0085A2","#00899D","#4E9093","#63888E","#418689","#008D97","#00807E","#008585","#53677A","#4D5D83","#41597E","#53718F","#496491","#505C84","#657BB8","#5072A7","#465FAD","#5265B0","#2E4DA7","#3E4081","#5B6F74","#405E74","#54738F","#3A607A","#516E86","#395E7A","#4F6988","#375D8A","#2A6790","#4E81AD","#4D7CBC","#386499","#3267AD","#16639F","#2760A7","#1278B9","#3173B1","#155DA4","#586E7D","#527183","#5A7D93","#3A6780","#2D677F","#126180","#246C8F","#0067AD","#0078BE","#007BBD","#4E7385","#0082B4","#1A7BA8","#3D6472","#006A8C","#0081BC","#296673","#0084A2","#007591","#066B8B","#0082B5","#007CAF","#507071","#3E6873","#007784","#006F7A","#007D92","#008D98","#00646B","#4C8087","#323F7A","#2F3349","#263145","#343A57","#4A4F68","#485470","#2F3654","#3E4465","#4C4E77","#303F66","#2E3561","#2D355A","#3B4B87","#2F3E86","#3F448C","#273347","#364051","#384F6B","#253659","#32435A","#405479","#325477","#355E91","#3A5B8D","#2C4578","#004D8C","#164D8F","#1D4E89","#255498","#2E5493","#28487F","#364450","#35485E","#274357","#315D78","#11589F","#005C9F","#3E5A6C","#425460","#16576F","#1C4F69","#00599A","#395460","#3D6174","#254E62","#115A6F","#005E78","#005F82","#335A66","#005960","#185869","#006578","#2D525C","#375A60","#265F6C","#174950", "#255B60"];

export const colors = [].concat(red_colors, green_colors, blue_colors);