import { useEffect, useRef } from "react"
import debouncing from "../../utils/debouncing";


class Stars {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.opacity = 0;
        this.speed = Math.random() * 0.1;
        this.color = '255,255,255';
    } 

    setColor(r, g, b) {
        this.color = `${r},${g},${b}`;
    }

    setOpacity(val) {
        if(val > 100) val = 100;
        if(val < 0) val = 0;
        this.opacity = val;
    }

    show(ctx) {
        if(!ctx) return;
        
        ctx.clearRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
        
        ctx.fillStyle = `rgb(${this.color}, ${this.opacity})`;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

    }

    update() {
        this.opacity += this.speed;


        if(this.opacity < 0 || this.opacity > 1) {
            this.opacity = this.opacity < 0 ? 0 : 1;
            this.speed *= -1;
        }
    }

    distanceFrom(x, y) {
        const dx = x - this.x;
        const dy = y - this.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}

export default function StarsBackground({gap={x: 10, y: 10}, mouseRadius=100,stareSize=2, stareColor=[100,100,100], ...props}) {
    const canvas = useRef(null)
    const ctx = useRef(null);
    const rows = useRef(0);
    const cols = useRef(0);
    const stars = useRef([]);
    

    function init() {
        if(!canvas.current) return;

        const {height, width} = canvas.current.getBoundingClientRect();
        canvas.current.width = width;
        canvas.current.height = height;

        rows.current = Math.round(height / gap?.y) + 1;
        cols.current = Math.round(width / gap?.x) + 1;

        stars.current = [];
        for(let y=0; y<rows.current; y++) {
            for(let x=0; x<cols.current; x++) {
                stars.current.push(new Stars(gap.x * x, gap.y * y, stareSize));
                stars.current.at(-1)?.setColor(...stareColor);
            }
        }
        
    }

    function draw() {
        requestAnimationFrame(draw);
        if(!canvas.current || !ctx.current) return;

        ctx.current.fillStyle = Math.random() < .5 ? 'white' : 'black'

        for(let i=0; i<1000; i++){ 
            let s = stars.current[Math.floor(Math.random() * stars.current.length)];
            s.show(ctx.current)
            s.update()
        }
    }

    function handleMouseMove(e) {
        const {clientX: x, clientY: y} = e

        for(let s of stars.current) {
            const dis = s.distanceFrom(x, y);
            if(dis < mouseRadius && Math.random() < 0.02) 
                s.setOpacity(0);
        }
    }


    
    useEffect(() => {
        if(!canvas.current) return;
        ctx.current = canvas.current.getContext('2d');
        init();     

        canvas.current.addEventListener('mousemove', handleMouseMove);
        return () => canvas.current?.removeEventListener('mousemove', handleMouseMove)
    }, [canvas])
    
    useEffect(() => {
        const handleResize = debouncing(init);
        const drawloop = requestAnimationFrame(draw)
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(drawloop);
        }
    }, [])

    return <canvas ref={canvas} {...props} ></canvas>
}