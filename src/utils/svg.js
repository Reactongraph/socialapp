import React, { useEffect, useState } from 'react';

class SvgImages extends React.Component {
    like_svg = (color, width = "27.043", height = "26.28") => {
        return `<svg xmlns="http://www.w3.org/2000/svg" width=${width} height=${height} viewBox="0 0 27.043 26.28">
          <g transform="translate(-1340.387 -7761.368)">
            <g transform="translate(1340.387 7772.438)">
              <path id="1024" fill="${color}" d="M1340.647,7975.595q.07,6.565-.259,13.128a1.538,1.538,0,0,0,.406.966c.192.239.5.624.835.633q2.113.066,4.227.03,1.083-.018,2.165-.063c.5-.021,1.363.1,1.525-.533a4.025,4.025,0,0,0,.031-.949l0-1.084.008-2.117q.008-2.117.015-4.234.008-2.375.017-4.75a1.789,1.789,0,0,0-.5-.935c-.139-.163-.485-.573-.744-.528a27.934,27.934,0,0,1-7.476.3c-.395-.037.025.758.09.858.21.323.569.822,1,.862a27.934,27.934,0,0,0,7.476-.3l-1.246-1.462q-.015,4.131-.03,8.262-.007,2.014-.014,4.027c0,.2.065.572-.111.725-.191.167-.584.114-.816.125q-1.03.046-2.061.069-2.32.051-4.64-.022l1.241,1.6q.263-5.206.281-10.42,0-1.493-.012-2.983a1.419,1.419,0,0,0-.25-.6,2.576,2.576,0,0,0-.525-.617c-.2-.163-.635-.44-.63.013Z" transform="translate(-1340.387 -7975.155)"/>
            </g>
            <g transform="translate(1348.257 7761.368)">
              <path id="1025" fill="${color}" d="M1493.852,7775.263a6.713,6.713,0,0,0,3.026-3.388c.318-.8.419-1.67.689-2.489a13.9,13.9,0,0,0,.789-2.676,10.777,10.777,0,0,0-.2-2.916c-.018-.117-.036-.233-.054-.349-.005-.037-.053-.245-.019-.129,0,0-.026-.148-.015-.046,0,.007.017-.119.016-.058,0,.042.009-.024.039-.032-.107.028.03,0,.058-.01.076-.029,0,0-.014,0,.047-.009.1-.013.146-.017.075-.006.151-.008.227-.011.208-.007.416-.012.624-.006.034,0,.289.018.159,0,.082.009.163.019.244.033s.184.044.277.06-.017-.007-.034-.014c.06.023.123.057.185.076.1.032-.033-.023-.049-.033.046.029.09.061.136.089.162.1-.128-.14,0,0a.8.8,0,0,0,.093.1c-.019,0-.122-.177-.077-.083a.607.607,0,0,0,.076.11c.072.087-.062-.161-.031-.052a1.9,1.9,0,0,0,.1.213c.064.146-.037-.155.02.067.041.159.063.32.1.481.018.092,0-.021,0-.035,0,.048.008.1.011.145q.008.127.01.255c0,.172,0,.344-.011.516-.052.969-.207,1.938-.321,2.9l-.385,3.266a1.351,1.351,0,0,0,.854,1.181c.4.159.86.1.919-.4l.361-3.062c.112-.948.251-1.9.328-2.849a5.734,5.734,0,0,0-.217-2.321,3.469,3.469,0,0,0-1.986-2.129,4.618,4.618,0,0,0-1.479-.276,5.245,5.245,0,0,0-1.151.044,1.071,1.071,0,0,0-.972,1.03,8.226,8.226,0,0,0,.2,1.535,6.108,6.108,0,0,1-.107,2.725c-.14.451-.318.887-.473,1.332a12.672,12.672,0,0,0-.364,1.327,8.812,8.812,0,0,1-.43,1.45,5.958,5.958,0,0,1-.293.6,3.654,3.654,0,0,1-.281.445,6.252,6.252,0,0,1-.9,1,4.945,4.945,0,0,1-1.006.716c-.425.233-.312.776-.062,1.109.231.307.819.806,1.253.568Z" transform="translate(-1492.376 -7761.368)" />
            </g>
            <g transform="translate(1348.216 7770.377)">
              <path id="1026" fill="${color}" d="M1492.164,7950.41a7.107,7.107,0,0,0,3.7,1.012,30.473,30.473,0,0,0,3.916-.1c1.316-.108,2.627-.279,3.933-.476.67-.1,1.34-.208,2.009-.318a6.1,6.1,0,0,0,1.864-.436,1.434,1.434,0,0,0,.741-1.537,2.147,2.147,0,0,0-1.431-1.649l.214,1.6a2.756,2.756,0,0,0,2.295-1.883,2.994,2.994,0,0,0-.957-3l-.042,1.264a2.7,2.7,0,0,0,2.226-1.65c.332-1.161-.592-2.284-1.317-3.075l-.5,1.295a1.742,1.742,0,0,0,1.976-1.834,3.168,3.168,0,0,0-.454-1.468,5.139,5.139,0,0,0-.96-1.316,5.718,5.718,0,0,0-3.08-1.153,24.341,24.341,0,0,0-3.223-.318,22.85,22.85,0,0,0-3.491.144.626.626,0,0,0-.555.9,1.354,1.354,0,0,0,1.264.78,22.883,22.883,0,0,1,2.592-.159q.3,0,.6.006l.3.009.2.008c-.1,0,.029,0,.057,0q.649.038,1.294.112.62.072,1.236.178.32.055.638.12.147.029.293.062l.125.027c.02,0,.2.046.081.018s.022.006.038.012c.054.017.108.033.162.053s.078.034.118.046c.128.039-.067-.033-.06-.034.026,0,.086.054.11.063.125.054-.066-.051-.054-.05.059,0,.169.154.211.194.083.078-.029-.031-.037-.042.024.034.052.065.077.1.058.077.114.157.166.238s.088.141.131.212c-.072-.12.059.114.078.154a1.142,1.142,0,0,1,.147.977c.041-.121-.045.068-.07.105s-.042.06-.063.089c.047-.062.038-.032-.012.007s-.251.169-.112.086c-.012.008-.129.043-.022.015s-.174-.027.076,0a.714.714,0,0,0-.818.371.915.915,0,0,0,.314.924q.115.127-.005-.008c.038.043.075.086.111.131.055.066.109.134.162.2.07.092.132.188.2.283.111.159-.036-.106.048.083a3.248,3.248,0,0,1,.125.3c-.045-.139.006.047.012.091a1.428,1.428,0,0,1,.012.154c0-.066,0-.071-.007-.016,0,.029-.062.258-.023.154a.987.987,0,0,1-.1.185,1.173,1.173,0,0,1-.083.11q.09-.1-.007,0c-.055.043-.106.088-.164.128-.03.021-.278.147-.125.08a5.7,5.7,0,0,1-.977.316c-.651.158-.371.967-.042,1.265.038.033.075.067.11.1q-.132-.155-.025-.025c.045.063.087.124.129.187-.12-.185.013.043.033.093s.081.288.043.109c.016.074.031.148.04.224,0,.033.007.321.016.17a2,2,0,0,1-.09.481c-.018.052-.015.046.008-.017q-.029.067-.063.132a2.01,2.01,0,0,1-.112.189c-.016.025-.2.247-.093.136a1.7,1.7,0,0,1-.16.151,2.092,2.092,0,0,1-.175.134c-.04.028-.082.055-.124.079q.116-.056-.011.006c-.068.029-.134.057-.2.08q-.069.023-.141.041.15-.023,0,0c-.349.053-.686.281-.615.685a1.259,1.259,0,0,0,.829.915c.162.053-.08-.05-.093-.058.146.088-.078-.064-.086-.072.151.128-.119-.157-.042-.048s-.065-.177-.033-.062a.587.587,0,0,0,.044.107c.049.092-.008-.15-.017-.046a.372.372,0,0,0,.014.114c.021.073.031-.137,0-.007a.719.719,0,0,0-.031.139c0,.083.07-.086.008-.033a.343.343,0,0,0-.061.095c-.034.077.109-.066.009-.019-.015.007-.147.1-.069.057s-.064.025-.083.032c-.062.023-.125.038-.187.058-.148.048.04,0-.052.014-1.142.19-2.285.379-3.431.545a41.681,41.681,0,0,1-6.875.519c-.143,0-.285-.007-.427-.014.039,0,.167.011-.015,0-.086-.006-.172-.012-.258-.02-.256-.022-.512-.056-.765-.1-.07-.013-.139-.027-.208-.043-.092-.021-.172-.045-.035,0-.135-.039-.269-.082-.4-.131-.052-.02-.1-.041-.156-.063-.068-.028-.289-.073-.052-.02a1.39,1.39,0,0,1-.362-.218c-.355-.238-1.023-.341-1.286.085-.276.447.151.953.5,1.188Z" transform="translate(-1491.575 -7935.351)" />
            </g>
          </g>
        </svg>`;
    };
    dislike = (color = "#3cbfae", width = "25.979", height = "26.231") => {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width=${width} height=${height} viewBox="0 0 25.979 26.231">
      <path id="Shape" d="M19.856,0H2.436A2.432,2.432,0,0,0,0,2.423V10.9a2.432,2.432,0,0,0,2.436,2.423H6.09l4.872,10.9A3.648,3.648,0,0,0,14.616,20.6V15.75h6.923a2.439,2.439,0,0,0,1.837-.834,2.407,2.407,0,0,0,.57-1.953L22.265,2.06A2.419,2.419,0,0,0,19.856,0Z" transform="translate(1 1)" fill="${color}" stroke="#f1f1f1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    </svg>
    `;
    };
    header_back_plain = (color = "#3cbfae", width = "25.979", height = "26.231") => {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="8.72" height="12.7" viewBox="0 0 8.72 12.7">
        <g id="Group_3242" data-name="Group 3242" transform="translate(53.131 12.7) rotate(180)">
          <g id="Group_1573" data-name="Group 1573" transform="translate(44.411 0)">
            <path id="Path_1453" data-name="Path 1453" d="M-1556.758,12.918l6.682,6,.37-1.4a8.1,8.1,0,0,0-3.019,2.651c-.192.243-.381.488-.575.729s-.434.455-.6.7c.15-.225.072-.076.013-.015s-.114.115-.172.172c-.116.112-.236.22-.361.323-.109.09-.23.166-.337.256.257-.216.057-.041-.021.006s-.141.082-.213.121c-.4.217-.807.782-.515,1.224a1.032,1.032,0,0,0,1.355.218,9.857,9.857,0,0,0,2.941-2.8c.19-.243.381-.485.579-.722q.137-.164.279-.324c.057-.064.261-.22.025-.03.062-.049.113-.117.169-.172a6.656,6.656,0,0,1,.683-.581c.177-.132-.226.14-.036.025.069-.041.136-.084.206-.124a4.363,4.363,0,0,1,.438-.214.879.879,0,0,0,.37-1.4l-6.682-6a1.16,1.16,0,0,0-1.443.116.822.822,0,0,0-.136,1.238Z" transform="translate(1556.988 -11.361)" fill="#fff"/>
          </g>
        </g>
      </svg>
      `;
    };
    header_back_foggy = (color = "#FFF", height, width) => {
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.642" height="49.004" viewBox="0 0 45.642 49.004">
        <defs>
          <clipPath id="clip-path">
            <path id="bg" d="M10.036,1.459c1.387,3.967.24,16.63-1.7,23.824a22.135,22.135,0,0,1-3.369,7.19c-1.309,1.874-2.949,4.406-3.96,3.816C-.978,34.923.17,22.26,2.707,12.465,5.3,2.366,8.646-2.7,10.036,1.459Z" transform="translate(35.822 0) rotate(80)" fill="none"/>
          </clipPath>
        </defs>
        <g id="Group_1941" data-name="Group 1941" transform="translate(0 0)">
          <g id="Group_1937" data-name="Group 1937" transform="translate(0 0)" opacity="0.375">
            <path id="bg-2" data-name="bg" d="M24.608,2.535c7.585,5.009,10.112,17.418,6.545,23.64-1.842,3.066-5.029,3.947-9.139,5.3-4.059,1.1-9.039,2.679-13.3,1.418C.236,30.2-2.291,17.789,2.172,9.251,6.669.431,16.905-2.676,24.608,2.535Z" transform="matrix(-0.53, -0.848, 0.848, -0.53, 17.353, 45.447)" fill="${color}"/>
          </g>
          <g id="Group_1575" data-name="Group 1575" transform="translate(34.769 28.997) rotate(-180)">
            <g id="Group_1572" data-name="Group 1572" transform="translate(0 6.248)">
              <path id="Path_1452" data-name="Path 1452" d="M1.285,1.667l8.135.058c2.6.019,5.2,0,7.789.229q.549.048,1.1.112.274.032.547.069c-.006,0,.292.04.137.019l.046.007.182.028q1.09.17,2.164.427c.4.1,1.089,0,1.091-.539a1.228,1.228,0,0,0-1.008-1.05A38.5,38.5,0,0,0,13.483.112C10.8.04,8.107.052,5.42.033L.826,0C.392,0-.132.276.03.791a1.385,1.385,0,0,0,1.255.876Z" transform="translate(0 0)" fill="${color}"/>
            </g>
            <g id="Group_1573" data-name="Group 1573" transform="translate(14.516 0)">
              <path id="Path_1453" data-name="Path 1453" d="M.236,1.664,7.1,8.075l.38-1.493a8.432,8.432,0,0,0-3.1,2.832c-.2.26-.391.521-.59.779s-.445.486-.615.75c.154-.24.074-.081.014-.016s-.117.123-.177.183c-.119.12-.243.235-.371.345-.112.1-.236.178-.346.274.264-.231.058-.044-.022.007s-.145.088-.219.129c-.413.232-.829.835-.529,1.307a1.031,1.031,0,0,0,1.391.232,10.31,10.31,0,0,0,3.02-3c.2-.259.391-.518.594-.771q.141-.175.287-.346c.059-.068.269-.235.026-.032.063-.053.116-.125.174-.184a6.923,6.923,0,0,1,.7-.621c.182-.142-.232.149-.036.027.071-.044.14-.09.211-.132a4.4,4.4,0,0,1,.449-.229.956.956,0,0,0,.38-1.493L1.858.218A1.155,1.155,0,0,0,.376.342a.9.9,0,0,0-.14,1.323Z" transform="translate(0)" fill="${color}"/>
            </g>
          </g>
        </g>
      </svg>
      `;
    };
}

export default SvgImages;