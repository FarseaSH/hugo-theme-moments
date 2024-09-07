function showMomentCount() { {{ $a := where $.Site.RegularPages "Section" .Section}}{{ if .IsHome }}{{ $a = $.Site.RegularPages }}{{ end }}
    document.getElementById("momentCount").innerHTML = {{ len $a }};
}
showMomentCount()