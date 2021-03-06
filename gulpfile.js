var gulp=require("gulp");
var p=require("gulp-load-plugins")();

gulp.task("default",["concat:watch"])

gulp.task("concat:watch",function(){
    gulp.watch("./**/*.html",function(event){
        concatCompile(event.path)
    })
})


function concatCompile(path){
    //console.log(14,path)
    var file=path.split("\\");
    var path_file=file.slice(0,-1);
    path_file=path_file.join("\\");
    var path_name=file[file.length-1];
    //console.log(17,file)
    if(path_name=="index.html"){
        return false
    }
    console.log("生成文件为",path_name)
    gulp.src(path)
        .pipe(p.contentIncluder({
            includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g,
        }))
        .pipe(p.rename("index.html"))
        .pipe(gulp.dest(path_file))
}

/*
gulp.task("concat:compile",function(event){
    console.log(11,event);
    gulp.src("./!*!/!*.html")
        .pipe(p.contentIncluder({
        includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g,
    }))
        .pipe(p.rename("index.html"))
        .pipe(gulp.dest("./!*"))
})*/
