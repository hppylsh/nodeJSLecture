// 3.노드 기능 알아보기
// os 모듈(노드 내장모듈)

// terminal - require('os');

/** 
 * 
 * > os.arch()
'x64'
> os.pla
undefined
> os.platform()
'win32'
> os.type()
'Windows_NT'
> os.uptime()
4810
//컴퓨터 키고나서 시간
> os.hostname()
'DESKTOP-P7'
// 컴퓨터이름
> os.release()
'10.0.19042'
> os.homedir()
'C:\\Users\\LSH'
> os.tmpdir()
'C:\\Users\\LSH\\AppData\\Local\\Temp'
> os.freemem()
10330980352
//남은 메모리
> os.totalmem()
16980127744
//총 메모리
> os.cpus()
[
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: { user: 306703, nice: 0, sys: 487750, idle: 4102390, irq: 187015 }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: { user: 231781, nice: 0, sys: 178765, idle: 4485781, irq: 2562 }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: { user: 559156, nice: 0, sys: 353468, idle: 3983703, irq: 4031 }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: { user: 315484, nice: 0, sys: 226015, idle: 4354828, irq: 1609 }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: { user: 421843, nice: 0, sys: 349781, idle: 4124703, irq: 3421 }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: { user: 254281, nice: 0, sys: 280703, idle: 4361343, irq: 2593 }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: { user: 388625, nice: 0, sys: 378046, idle: 4129640, irq: 3203 }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: { user: 265640, nice: 0, sys: 383093, idle: 4247578, irq: 2078 }
  }
]

-- cpu가 8개
-- 노드는 싱글스레드이기 때문에 하나의 코어만 사용
-- 코어가 8개면 7개가 놀고있음
-- cpu갯수를 파악해서 반복문을 사용하여 싱글스레드의 단점을 극복

 */